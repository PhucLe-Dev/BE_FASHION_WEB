const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/fashion_web25');
const express = require('express');
const router = express.Router();
const SanPhamSchema = require('../model/schemaSanPham');

// Route lấy tất cả sản phẩm
router.get('/tat-ca-san-pham', async (req, res) => {
    try {
        const sanPhams = await conn.model('san_pham', SanPhamSchema).find();
        res.status(200).json(sanPhams);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Route lấy và hiện thị một sản phẩm theo ID
router.get('/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const SanPham = await conn.model('san_pham', SanPhamSchema).findOne({ slug });
        if (!SanPham) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(SanPham);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi server' });
    }
});

const { fileFields } = require('../middlewares/upload');
const { makeSlug, makeSku } = require('../utils/generate');
const { uploadBuffer } = require('../utils/cloudinary');

// Route thêm sản phẩm mới + variant đầu tiên
router.post('/them-san-pham', fileFields, async (req, res) => {
    try {
        // Lấy dữ liệu từ body
        const {
            ten_sp, id_loai, id_thuong_hieu, mo_ta = '',
            chat_lieu = '', xuat_xu = '', hot = false, an_hien = true,
            tags = '', kich_thuoc, mau_sac, gia, gia_km, so_luong
        } = req.body;

        // Kiểm tra dữ liệu
        if (!req.files?.hinh_chinh)
            return res.status(400).json({ error: 'Thiếu hinh_chinh' });

        // Tạo product rỗng
        let product = await conn.model('san_pham', SanPhamSchema).create({
            ten_sp, id_loai, id_thuong_hieu, mo_ta,
            chat_lieu, xuat_xu, hot, an_hien,
            tags: tags.split(',').map(t => t.trim())
        });

        // Tạo slug cho sản phẩm
        product.slug = makeSlug(ten_sp, product._id);

        // Upload ảnh chính lên Cloudinary
        const main = await uploadBuffer(
            req.files.hinh_chinh[0].buffer,
            `products/${product._id}`
        );

        // Upload ảnh thumbnail lên Cloudinary
        const thumbs = [];
        if (req.files.hinh_thumbnail) {
            for (const f of req.files.hinh_thumbnail) {
                const t = await uploadBuffer(
                    f.buffer,
                    `products/${product._id}/thumb`
                );
                thumbs.push(t.secure_url);
            }
        }

        // Tính toán giá khuyến mãi
        const phan_tram_km = gia_km ? Math.round(100 - (gia_km / gia) * 100) : 0;

        // Tạo variant đầu tiên
        product.variants.push({
            sku: await makeSku(),
            kich_thuoc, mau_sac,
            gia, gia_km, phan_tram_km,
            so_luong,
            hinh_chinh: main.secure_url,
            hinh_thumbnail: thumbs
        });

        await product.save();
        res.status(201).json({ message: 'Created', newProduct: product });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Route thêm variant mới cho sản phẩm đã có
router.post('/:slug/variants', fileFields, async (req, res) => {
    try {
        const { slug } = req.params;
        const prod = await conn.model('san_pham', SanPhamSchema).findOne({ slug });
        if (!prod) return res.status(404).json({ error: 'Product not found' });

        const { kich_thuoc, mau_sac, gia, gia_km, so_luong } = req.body;
        if (!req.files?.hinh_chinh)
            return res.status(400).json({ error: 'Thiếu hinh_chinh' });


        const main = await uploadBuffer(
            req.files.hinh_chinh[0].buffer,
            `products/${prod._id}`
        );

        const thumbs = [];
        if (req.files.hinh_thumbnail) {
            for (const f of req.files.hinh_thumbnail) {
                const t = await uploadBuffer(
                    f.buffer,
                    `products/${prod._id}/thumb`
                );
                thumbs.push(t.secure_url);
            }
        }

        const phan_tram_km = gia_km ? Math.round(100 - (gia_km / gia) * 100) : 0;

        prod.variants.push({
            sku: await makeSku(),
            kich_thuoc, mau_sac,
            gia, gia_km, phan_tram_km,
            so_luong,
            hinh_chinh: main.secure_url,
            hinh_thumbnail: thumbs
        });

        await prod.save();
        res.status(201).json({ message: 'Variant added' });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Router sửa sản phẩm
router.put('/sua-san-pham/:slug', fileFields, async (req, res) => {
    try {
        /* 1. Lấy sản phẩm theo slug */
        const { slug } = req.params;
        const prod = await conn.model('san_pham', SanPhamSchema).findOne({ slug });
        if (!prod) return res.status(404).json({ error: 'Product not found' });

        /* 2. Cập nhật các trường gửi lên  */
        const fields = [
            'ten_sp', 'id_loai', 'id_thuong_hieu', 'mo_ta',
            'chat_lieu', 'xuat_xu', 'hot', 'an_hien', 'tags'
        ];
        fields.forEach(f => {
            if (req.body[f] !== undefined) prod[f] = req.body[f];
        });

        /* tags (chuỗi, cách nhau bằng ,) */
        if (req.body.tags)
            prod.tags = req.body.tags.split(',').map(t => t.trim());

        // Nếu đổi tên sản phẩm ⇒ cập nhật slug
        if (req.body.ten_sp) {
            prod.ten_sp = req.body.ten_sp;
            prod.slug = makeSlug(req.body.ten_sp, prod._id);
        }

        /* 3. Lưu lại */
        await prod.save();
        res.status(200).json({ message: 'Updated', product: prod });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

const cloudinary = require('cloudinary').v2;

// Route xóa sản phẩm
router.delete('/xoa-san-pham/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    // 1 Lấy sản phẩm
    const prod = await conn
      .model('san_pham', SanPhamSchema)
      .findOne({ slug });

    if (!prod) return res.status(404).json({ error: 'Product not found' });

    // 2 Xoá mọi ảnh nằm dưới folder products/<_id>/*
    //    (public_id của bạn là "products/<prod._id>/...")  
    await cloudinary.api.delete_resources_by_prefix(`products/${prod._id}`);

    // 3 Xoá luôn folder trống để gọn gàng (không bắt buộc)
    await cloudinary.api.delete_folder(`products/${prod._id}`);

    // 4 Xoá document trong MongoDB
    await prod.deleteOne();

    res.status(200).json({ message: 'Deleted', product: prod });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


module.exports = router;