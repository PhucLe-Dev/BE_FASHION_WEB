const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/fashion_web25');
const express = require('express');
const router = express.Router();
const SanPhamSchema = require('../model/schemaSanPham');
const LoaiSanPhamSchema = require('../model/schemaLoaiSanPham');
const ThuongHieuSchema = require('../model/schemaThuongHieu');

// Route để lấy danh sách sản phẩm với phân trang và bộ lọc
router.get('/san-pham', async (req, res) => {
  try {
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const isRandom = req.query.random === 'true';
    const category = req.query.category ? parseInt(req.query.category) : null; // id_loai
    const origin = req.query.origin || null; // xuat_xu
    const brand = req.query.brand ? parseInt(req.query.brand) : null; // id_thuong_hieu
    const sort = req.query.sort || null; // price_asc, price_desc, views, newest, bestselling, discounted

    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng sản phẩm không hợp lệ' });
    }

    const skip = (page - 1) * limit;

    // Điều kiện lọc cơ bản
    const matchCondition = { an_hien: true };

    // Thêm các bộ lọc nếu có
    if (category) matchCondition.id_loai = category;
    if (origin) matchCondition.xuat_xu = origin;
    if (brand) matchCondition.id_thuong_hieu = brand;

    // Nếu là lấy ngẫu nhiên
    if (isRandom) {
      const listSanPham = await SanPhamModel.aggregate([
        { $match: matchCondition },
        { $sample: { size: limit } },
        {
          $lookup: {
            from: 'thuong_hieu',
            localField: 'id_thuong_hieu',
            foreignField: 'id',
            as: 'thuong_hieu',
          },
        },
        {
          $unwind: {
            path: '$thuong_hieu',
            preserveNullAndEmptyArrays: true,
          },
        },
      ]);

      return res.status(200).json({
        data: listSanPham,
        pagination: null,
      });
    }

    // Pipeline cơ bản
    let pipeline = [{ $match: matchCondition }];

    // Xử lý sản phẩm giảm giá nếu sort = 'discounted'
    if (sort === 'discounted') {
      pipeline.push(
        { $unwind: '$variants' },
        {
          $match: {
            'variants.gia_km': { $ne: null },
            'variants.gia_km': { $gt: 0 },
            $expr: { $lt: ['$variants.gia_km', '$variants.gia'] },
          },
        },
        {
          $group: {
            _id: '$_id',
            ten_sp: { $first: '$ten_sp' },
            slug: { $first: '$slug' },
            id_loai: { $first: '$id_loai' },
            id_thuong_hieu: { $first: '$id_thuong_hieu' },
            mo_ta: { $first: '$mo_ta' },
            chat_lieu: { $first: '$chat_lieu' },
            xuat_xu: { $first: '$xuat_xu' },
            variants: { $push: '$variants' },
            hot: { $first: '$hot' },
            an_hien: { $first: '$an_hien' },
            luot_xem: { $first: '$luot_xem' },
            tags: { $first: '$tags' },
            meta_title: { $first: '$meta_title' },
            meta_description: { $first: '$meta_description' },
            meta_keywords: { $first: '$meta_keywords' },
            created_at: { $first: '$created_at' },
            updated_at: { $first: '$updated_at' },
          },
        }
      );
    }

    // Xử lý sắp xếp theo giá
    if (sort === 'price_asc' || sort === 'price_desc') {
      pipeline.push(
        { $unwind: '$variants' },
        {
          $addFields: {
            effectivePrice: {
              $cond: {
                if: { $and: [{ $ne: ['$variants.gia_km', null] }, { $gt: ['$variants.gia_km', 0] }] },
                then: '$variants.gia_km',
                else: '$variants.gia',
              },
            },
          },
        },
        {
          $group: {
            _id: '$_id',
            ten_sp: { $first: '$ten_sp' },
            slug: { $first: '$slug' },
            id_loai: { $first: '$id_loai' },
            id_thuong_hieu: { $first: '$id_thuong_hieu' },
            mo_ta: { $first: '$mo_ta' },
            chat_lieu: { $first: '$chat_lieu' },
            xuat_xu: { $first: '$xuat_xu' },
            variants: { $push: '$variants' },
            hot: { $first: '$hot' },
            an_hien: { $first: '$an_hien' },
            luot_xem: { $first: '$luot_xem' },
            tags: { $first: '$tags' },
            meta_title: { $first: '$meta_title' },
            meta_description: { $first: '$meta_description' },
            meta_keywords: { $first: '$meta_keywords' },
            created_at: { $first: '$created_at' },
            updated_at: { $first: '$updated_at' },
            effectivePrice: sort === 'price_asc' ? { $min: '$effectivePrice' } : { $max: '$effectivePrice' },
          },
        },
        { $sort: { effectivePrice: sort === 'price_asc' ? 1 : -1 } }
      );
    }

    // Xử lý sắp xếp theo bán chạy
    if (sort === 'bestselling') {
      pipeline.push(
        { $unwind: '$variants' },
        {
          $group: {
            _id: '$_id',
            ten_sp: { $first: '$ten_sp' },
            slug: { $first: '$slug' },
            id_loai: { $first: '$id_loai' },
            id_thuong_hieu: { $first: '$id_thuong_hieu' },
            mo_ta: { $first: '$mo_ta' },
            chat_lieu: { $first: '$chat_lieu' },
            xuat_xu: { $first: '$xuat_xu' },
            variants: { $push: '$variants' },
            hot: { $first: '$hot' },
            an_hien: { $first: '$an_hien' },
            luot_xem: { $first: '$luot_xem' },
            tags: { $first: '$tags' },
            meta_title: { $first: '$meta_title' },
            meta_description: { $first: '$meta_description' },
            meta_keywords: { $first: '$meta_keywords' },
            created_at: { $first: '$created_at' },
            updated_at: { $first: '$updated_at' },
            totalSold: { $sum: '$variants.so_luong_da_ban' },
          },
        },
        { $sort: { totalSold: -1 } }
      );
    }

    // Sắp xếp theo các tiêu chí khác
    if (sort === 'views') {
      pipeline.push({ $sort: { luot_xem: -1 } });
    } else if (sort === 'newest') {
      pipeline.push({ $sort: { created_at: -1 } });
    } else if (sort === 'oldest') {
      pipeline.push({ $sort: { created_at: 1 } });
    } else if (sort === 'hot') {
      pipeline.push({ $match: { hot: true } });
    }

    // Thêm phân trang và lookup thương hiệu
    pipeline.push({
      $facet: {
        paginatedResults: [
          { $skip: skip },
          { $limit: limit },
          {
            $lookup: {
              from: 'thuong_hieu',
              localField: 'id_thuong_hieu',
              foreignField: 'id',
              as: 'thuong_hieu',
            },
          },
          {
            $unwind: {
              path: '$thuong_hieu',
              preserveNullAndEmptyArrays: true,
            },
          },
        ],
        totalCount: [{ $count: 'count' }],
      },
    });

    const result = await SanPhamModel.aggregate(pipeline).exec();

    const totalProducts = result[0].totalCount.length > 0 ? result[0].totalCount[0].count : 0;
    const listSanPham = result[0].paginatedResults;
    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      data: listSanPham,
      pagination: {
        currentPage: page,
        limit,
        totalProducts,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm', error: error.message });
  }
});

// Route để lấy danh sách loại sản phẩm với phân trang
router.get('/loai-san-pham', async (req, res) => {
  try {
    const LoaiSanPhamModel = conn.model('loai_san_pham', LoaiSanPhamSchema);

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;

    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng loại sản phẩm không hợp lệ' });
    }

    const skip = (page - 1) * limit;

    const totalProducts = await LoaiSanPhamModel.countDocuments({ an_hien: true });
    const listLoaiSanPham = await LoaiSanPhamModel.find({ an_hien: true })
      .skip(skip)
      .limit(limit)
      .exec();

    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      data: listLoaiSanPham,
      pagination: {
        currentPage: page,
        limit: limit,
        totalProducts: totalProducts,
        totalPages: totalPages,
      },
    });
  } catch (error) {
    console.error('Error fetching categories products:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách loại sản phẩm', error: error.message });
  }
});

// Route để lấy danh sách thương hiệu với phân trang
router.get('/thuong-hieu', async (req, res) => {
  try {
    const ThuongHieuModel = conn.model('thuong_hieu', ThuongHieuSchema);

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;

    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng thương hiệu không hợp lệ' });
    }

    const skip = (page - 1) * limit;

    const totalProducts = await ThuongHieuModel.countDocuments({ an_hien: true });
    const listThuongHieu = await ThuongHieuModel.find({ an_hien: true })
      .skip(skip)
      .limit(limit)
      .exec();

    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      data: listThuongHieu,
      pagination: {
        currentPage: page,
        limit: limit,
        totalProducts: totalProducts,
        totalPages: totalPages,
      },
    });
  } catch (error) {
    console.error('Error fetching brands:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách thương hiệu', error: error.message });
  }
});

// Route để lấy danh sách xuất xứ
router.get('/xuat-xu', async (req, res) => {
  try {
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    const origins = await SanPhamModel.aggregate([
      { $match: { an_hien: true } }, // Chỉ lấy sản phẩm đang hiển thị
      { $group: { _id: '$xuat_xu' } }, // Nhóm theo xuat_xu để lấy giá trị duy nhất
      { $match: { _id: { $ne: null } } }, // Loại bỏ giá trị null
      { $sort: { _id: 1 } }, // Sắp xếp theo thứ tự bảng chữ cái
      { $project: { name: '$_id', _id: 0 } }, // Định dạng trả về { name: "Italy" }
    ]);

    res.status(200).json(origins);
  } catch (error) {
    console.error('Error fetching origins:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách xuất xứ', error: error.message });
  }
});

// Route để lấy danh sách sản phẩm theo SKU
router.get('/san-pham/:sku', async (req, res) => {
  try {
    const sku = req.params.sku;
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    let sanpham = await SanPhamModel.aggregate([
      { $match: { 'variants.sku': sku } },
      {
        $lookup: {
          from: 'thuong_hieu',
          localField: 'id_thuong_hieu',
          foreignField: 'id',
          as: 'thuong_hieu',
        },
      },
      {
        $lookup: {
          from: 'loai_san_pham',
          localField: 'id_loai',
          foreignField: 'id',
          as: 'loai_san_pham',
        },
      },
      { $unwind: { path: '$thuong_hieu', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$loai_san_pham', preserveNullAndEmptyArrays: true } },
      { $set: { luot_xem: { $add: ['$luot_xem', 1] } } },
    ]);

    if (!sanpham || sanpham.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await SanPhamModel.updateOne({ 'variants.sku': sku }, { $inc: { luot_xem: 1 } });

    res.status(200).json(sanpham[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
});

// Route để lấy danh sách sản phẩm liên quan theo id loại sản phẩm và id thương hiệu
router.get('/san-pham-lien-quan/:sku', async (req, res) => {
  try {
    const sku = req.params.sku;
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    const currentProduct = await SanPhamModel.aggregate([
      { $match: { 'variants.sku': sku } },
      {
        $lookup: {
          from: 'thuong_hieu',
          localField: 'id_thuong_hieu',
          foreignField: 'id',
          as: 'thuong_hieu',
        },
      },
      {
        $lookup: {
          from: 'loai_san_pham',
          localField: 'id_loai',
          foreignField: 'id',
          as: 'loai_san_pham',
        },
      },
      { $unwind: { path: '$thuong_hieu', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$loai_san_pham', preserveNullAndEmptyArrays: true } },
      { $limit: 1 },
    ]);

    if (!currentProduct || currentProduct.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const { id_loai, id_thuong_hieu } = currentProduct[0];

    const relatedProducts = await SanPhamModel.aggregate([
      {
        $match: {
          $and: [{ id_loai: id_loai }, { id_thuong_hieu: id_thuong_hieu }, { 'variants.sku': { $ne: sku } }],
        },
      },
      {
        $lookup: {
          from: 'thuong_hieu',
          localField: 'id_thuong_hieu',
          foreignField: 'id',
          as: 'thuong_hieu',
        },
      },
      {
        $lookup: {
          from: 'loai_san_pham',
          localField: 'id_loai',
          foreignField: 'id',
          as: 'loai_san_pham',
        },
      },
      { $unwind: { path: '$thuong_hieu', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$loai_san_pham', preserveNullAndEmptyArrays: true } },
      { $sample: { size: 4 } },
    ]);

    res.status(200).json(relatedProducts);
  } catch (error) {
    console.error('Error fetching related products:', error);
    res.status(500).json({ message: 'Error fetching related products', error: error.message });
  }
});

module.exports = router;