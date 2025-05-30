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
    const LoaiSanPhamModel = conn.model('loai_san_pham', LoaiSanPhamSchema);

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const slug = req.query.slug || null;
    const category = req.query.category ? parseInt(req.query.category) : null;
    const origin = req.query.origin || null;
    const brand = req.query.brand ? parseInt(req.query.brand) : null;
    const sort = req.query.sort || 'newest';

    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng sản phẩm không hợp lệ' });
    }

    const skip = (page - 1) * limit;
    const matchCondition = { an_hien: true };

    // Xử lý slug để xác định loại sản phẩm ban đầu
    let categoryIdFromSlug = null;
    if (slug) {
      const category = await LoaiSanPhamModel.findOne({ slug, an_hien: true });
      console.log('Category from slug:', category); // Debug
      if (category) {
        categoryIdFromSlug = category.id;
      } else {
        console.log(`No category found for slug: ${slug}`);
      }
    }

    // Nếu có category từ checkbox, ưu tiên sử dụng
    if (category) {
      matchCondition.id_loai = category;
    } else if (categoryIdFromSlug) {
      matchCondition.id_loai = categoryIdFromSlug;
    } else {
      // Nếu không có category, bỏ điều kiện id_loai để lấy tất cả sản phẩm
      delete matchCondition.id_loai;
    }

    if (origin) matchCondition.xuat_xu = origin;
    if (brand) matchCondition.id_thuong_hieu = brand;

    console.log('Match Condition:', matchCondition); // Debug
    let pipeline = [{ $match: matchCondition }];

    // Logic sort và pagination
    if (sort === 'discounted') {
      pipeline.push(
        { $unwind: '$variants' },
        {
          $match: {
            'variants.gia_km': { $ne: null, $gt: 0 },
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
    } else if (sort === 'price_asc' || sort === 'price_desc') {
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
    } else if (sort === 'bestselling') {
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
    } else if (sort === 'views') {
      pipeline.push({ $sort: { luot_xem: -1 } });
    } else if (sort === 'newest') {
      pipeline.push({ $sort: { created_at: -1 } });
    }

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
          { $unwind: { path: '$thuong_hieu', preserveNullAndEmptyArrays: true } },
        ],
        totalCount: [{ $count: 'count' }],
      },
    });

    const result = await SanPhamModel.aggregate(pipeline).exec();
    console.log('Aggregation result:', result); // Debug
    const totalProducts = result[0]?.totalCount.length > 0 ? result[0].totalCount[0].count : 0;
    const listSanPham = result[0]?.paginatedResults || [];
    const totalPages = Math.ceil(totalProducts / limit);

    if (listSanPham.length === 0) {
      console.log('No products found with current conditions');
    }

    res.status(200).json({
      data: listSanPham,
      pagination: { currentPage: page, limit, totalProducts, totalPages },
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

    const data = listLoaiSanPham.map(item => ({
      ...item._doc,
      slug: item.slug || item.ten_loai.toLowerCase().replace(/ /g, '-'),
    }));

    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      data: data,
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

    const data = listThuongHieu.map(item => ({
      ...item._doc,
      slug: item.slug || item.ten_thuong_hieu.toLowerCase().replace(/ /g, '-'),
    }));

    const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      data: data,
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
      { $match: { an_hien: true } },
      { $group: { _id: '$xuat_xu' } },
      { $match: { _id: { $ne: null } } },
      { $sort: { _id: 1 } },
      { $project: { name: '$_id', _id: 0 } },
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

// Route để lấy tất cả sản phẩm theo thương hiệu dựa trên slug (có phân trang)
router.get('/san-pham-theo-thuong-hieu/:slug', async (req, res) => {
  try {
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);
    const ThuongHieuModel = conn.model('thuong_hieu', ThuongHieuSchema);
    const slug = req.params.slug;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    if (!slug) {
      return res.status(400).json({ message: 'Slug thương hiệu không hợp lệ' });
    }
    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng sản phẩm không hợp lệ' });
    }

    // Tìm thương hiệu theo slug
    const brand = await ThuongHieuModel.findOne({ slug: slug, an_hien: true });
    if (!brand) {
      return res.status(404).json({ message: 'Không tìm thấy thương hiệu với slug này' });
    }

    const id_thuong_hieu = brand.id;
    const skip = (page - 1) * limit;

    // Pipeline để lấy sản phẩm theo thương hiệu với phân trang
    const pipeline = [
      { $match: { id_thuong_hieu: id_thuong_hieu, an_hien: true } },
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
      { $sort: { created_at: -1 } }, // Sắp xếp theo ngày tạo (mới nhất trước)
      {
        $facet: {
          paginatedResults: [
            { $skip: skip },
            { $limit: limit },
          ],
          totalCount: [{ $count: 'count' }],
        },
      },
    ];

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
    console.error('Error fetching products by brand slug:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm theo thương hiệu', error: error.message });
  }
});

// Route để lấy tất cả sản phẩm theo loại sản phẩm dựa trên slug (có phân trang)
router.get('/san-pham/slug/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const LoaiModel = conn.model('loai_san_pham', LoaiSanPhamSchema);
    const ProductModel = conn.model('san_pham', SanPhamSchema);

    // Tìm loại sản phẩm dựa trên slug
    const loai = await LoaiModel.findOne({ slug, an_hien: true });
    if (!loai) {
      return res.status(404).json({ message: 'Không tìm thấy loại sản phẩm' });
    }

    // Lọc sản phẩm theo id_loai
    let match = { an_hien: true, id_loai: loai.id };

    const pipeline = [
      { $match: match },
      {
        $lookup: {
          from: 'thuong_hieu',
          localField: 'id_thuong_hieu',
          foreignField: 'id',
          as: 'thuong_hieu',
        },
      },
      { $unwind: { path: '$thuong_hieu', preserveNullAndEmptyArrays: true } },
      { $sort: { created_at: -1 } },
      { $skip: skip },
      { $limit: limit },
      {
        $project: {
          ten_sp: 1,
          slug: 1,
          id_loai: 1,
          id_thuong_hieu: 1,
          mo_ta: 1,
          chat_lieu: 1,
          xuat_xu: 1,
          variants: 1,
          hot: 1,
          an_hien: 1,
          luot_xem: 1,
          tags: 1,
          meta_title: 1,
          meta_description: 1,
          meta_keywords: 1,
          created_at: 1,
          updated_at: 1,
          thuong_hieu: 1, // Giữ trường thuong_hieu từ $lookup
        },
      },
    ];

    const list = await ProductModel.aggregate(pipeline);
    const total = await ProductModel.countDocuments(match);

    res.status(200).json({
      data: list,
      pagination: {
        currentPage: page,
        limit,
        totalProducts: total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server', error: err.message });
  }
});

module.exports = router;