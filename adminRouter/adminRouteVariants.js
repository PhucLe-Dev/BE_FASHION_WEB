const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/fashion_web25');
const express = require('express');
const router = express.Router();
const SanPhamSchema = require('../model/schemaSanPham');

// Route lấy tất cả variant sản phẩm
router.get('/', async (req, res) => {
    try {
        const sanPhams = await conn.model('san_pham', SanPhamSchema).find().lean();
        // Lấy tất cả variants, trả về nguyên bản từng variant
        const variants = sanPhams.flatMap(sp => sp.variants);
        res.status(200).json(variants);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Route lấy và hiện thị theo SKU
router.get('/:sku', async (req, res) => {
    const { sku } = req.params;

    try {
        // tìm sản phẩm chứa variant có sku khớp
        const sp = await conn.model('san_pham', SanPhamSchema)
            .findOne({ 'variants.sku': sku })
            .lean();

        if (!sp) return res.status(404).json({ message: 'Không tìm thấy variant' });

        // lọc ra đúng variant
        const variant = sp.variants.find(v => v.sku === sku);

        // trả về nguyên bản variant (nếu muốn kèm tên sản phẩm, thêm { ...variant, ten_sp: sp.ten_sp })
        res.status(200).json(variant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Gọi các phần liên quan đến upload img
const { fileFields } = require('../middlewares/upload');
const { uploadBuffer } = require('../utils/cloudinary');

// PUT /admin/variants/sua-variant/:sku
router.put('/sua-variant/:sku', fileFields, async (req, res) => {
  try {
    const { sku } = req.params;

    /* 1. Tìm sản phẩm chứa variant cần sửa */
    const prod = await conn.model('san_pham', SanPhamSchema)
                           .findOne({ 'variants.sku': sku });
    if (!prod) return res.status(404).json({ error: 'Variant not found' });

    /* 2. Lấy variant cần sửa */
    const v = prod.variants.find(v => v.sku === sku);

    /* ===== 3. Cập nhật các trường text/number ===== */
    const updatable = [
      'kich_thuoc', 'mau_sac', 'gia', 'so_luong', 'so_luong_da_ban'
    ];
    updatable.forEach(f => {
      if (req.body[f] !== undefined) v[f] = req.body[f];
    });

    /* ===== 4. Xử lý giá & giá khuyến mãi ===== */
    const toNum = val =>
      val === undefined || val === null || val === '' ? undefined : Number(val);

    if (toNum(req.body.gia) !== undefined) v.gia = toNum(req.body.gia);

    if (req.body.gia_km !== undefined) {
      const newGiaKm = toNum(req.body.gia_km);

      if (!newGiaKm) {
        // Hủy khuyến mãi
        v.gia_km       = null;
        v.phan_tram_km = 0;
      } else {
        // Cập nhật khuyến mãi
        v.gia_km       = newGiaKm;
        v.phan_tram_km = Math.round(100 - (newGiaKm / v.gia) * 100);
      }
    }

    /* ===== 5. Xử lý ảnh (nếu có) ===== */
    // Ảnh chính
    if (req.files?.hinh_chinh) {
      const main = await uploadBuffer(
        req.files.hinh_chinh[0].buffer,
        `products/${prod._id}`
      );
      v.hinh_chinh = main.secure_url;
    }

    // Ảnh thumbnail
    if (req.files?.hinh_thumbnail) {
      const thumbs = [];
      for (const f of req.files.hinh_thumbnail) {
        const t = await uploadBuffer(
          f.buffer,
          `products/${prod._id}/thumb`
        );
        thumbs.push(t.secure_url);
      }
      v.hinh_thumbnail = thumbs;
    }

    /* 6. Lưu và trả về */
    await prod.save();
    res.json({ message: 'Variant updated', variant: v });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});



module.exports = router;