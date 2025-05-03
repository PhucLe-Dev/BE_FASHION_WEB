const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/fashion_web25');
const express = require('express');
const router = express.Router();
const SanPhamSchema = require('../model/schemaSanPham');

// Route để lấy danh sách sản phẩm với phân trang
router.get('/san-pham', async (req, res) => {
  try {
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    // Lấy tham số từ query string
    const page = parseInt(req.query.page) || 1; // Mặc định là trang 1
    const limit = parseInt(req.query.limit) || 20; // Mặc định lấy 20 sản phẩm mỗi trang

    // Validate page và limit
    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng sản phẩm không hợp lệ' });
    }

    // Tính số sản phẩm cần bỏ qua (skip)
    const skip = (page - 1) * limit;

    // Truy vấn MongoDB
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true }); // Tổng số sản phẩm
    const listSanPham = await SanPhamModel.find({ an_hien: true })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPham,
      pagination: {
        currentPage: page,
        limit: limit,
        totalProducts: totalProducts,
        totalPages: totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm', error: error.message });
  }
});

// Route để lấy danh sách sản phẩm hot với phân trang
router.get('/san-pham-hot', async (req, res) => {
  try {
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    // Lấy tham số từ query string
    const page = parseInt(req.query.page) || 1; // Mặc định là trang 1
    const limit = parseInt(req.query.limit) || 20; // Mặc định lấy 20 sản phẩm mỗi trang

    // Validate page và limit
    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng sản phẩm không hợp lệ' });
    }

    // Tính số sản phẩm cần bỏ qua (skip)
    const skip = (page - 1) * limit;

    // Truy vấn MongoDB
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, hot: true }); // Tổng số sản phẩm
    const listSanPhamHot = await SanPhamModel.find({ an_hien: true, hot: true })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamHot,
      pagination: {
        currentPage: page,
        limit: limit,
        totalProducts: totalProducts,
        totalPages: totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm', error: error.message });
  }
});

// Route để lấy danh sách sản phẩm xem nhiều với phân trang
router.get('/san-pham-xem-nhieu', async (req, res) => {
  try {
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    // Lấy tham số từ query string
    const page = parseInt(req.query.page) || 1; // Mặc định là trang 1
    const limit = parseInt(req.query.limit) || 20; // Mặc định lấy 20 sản phẩm mỗi trang

    // Validate page và limit
    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng sản phẩm không hợp lệ' });
    }

    // Tính số sản phẩm cần bỏ qua (skip)
    const skip = (page - 1) * limit;

    // Truy vấn MongoDB
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true }); // Tổng số sản phẩm
    const listSanPhamXemNhieu = await SanPhamModel.find({ an_hien: true })
      .sort({ luot_xem: -1 }) // Sắp xếp theo lượt xem giảm dần
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamXemNhieu,
      pagination: {
        currentPage: page,
        limit: limit,
        totalProducts: totalProducts,
        totalPages: totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm', error: error.message });
  }
});

// Route để lấy danh sách sản phẩm mới với phân trang
router.get('/san-pham-moi', async (req, res) => {
  try {
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    // Lấy tham số từ query string
    const page = parseInt(req.query.page) || 1; // Mặc định là trang 1
    const limit = parseInt(req.query.limit) || 20; // Mặc định lấy 20 sản phẩm mỗi trang

    // Validate page và limit
    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng sản phẩm không hợp lệ' });
    }

    // Tính số sản phẩm cần bỏ qua (skip)
    const skip = (page - 1) * limit;

    // Truy vấn MongoDB
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true }); // Tổng số sản phẩm
    const listSanPhamMoi = await SanPhamModel.find({ an_hien: true })
      .sort({ created_at: -1 }) // Sắp xếp theo lượt xem giảm dần
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamMoi,
      pagination: {
        currentPage: page,
        limit: limit,
        totalProducts: totalProducts,
        totalPages: totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm', error: error.message });
  }
});

// Route để lấy danh sách sản phẩm theo loại với phân trang
router.get('/san-pham/:id_loai', async (req, res) => {
  try {
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    // Lấy tham số từ query string
    const page = parseInt(req.query.page) || 1; // Mặc định là trang 1
    const limit = parseInt(req.query.limit) || 20; // Mặc định lấy 20 sản phẩm mỗi trang
    const sku = req.params.id_loai;

    // Validate page và limit
    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng sản phẩm không hợp lệ' });
    }

    // Tính số sản phẩm cần bỏ qua (skip)
    const skip = (page - 1) * limit;

    // Truy vấn MongoDB
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true }); // Tổng số sản phẩm
    const listSanPhamTheoLoai = await SanPhamModel.find({ id_loai: id_loai, an_hien: true })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

      if (!listSanPhamTheoLoai) {
        return res.status(404).json({ message: 'Product not found' });
      }
    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamTheoLoai,
      pagination: {
        currentPage: page,
        limit: limit,
        totalProducts: totalProducts,
        totalPages: totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm', error: error.message });
  }
});


// Route để lấy sản phẩm theo SKU
router.get('/san-pham/:sku', async (req, res) => {
  try {
    const sku = req.params.sku;
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);
    let sanpham = await SanPhamModel.findOne({ "variants.sku": sku }); // Tìm sản phẩm theo SKU
    if (!sanpham) {
      return res.status(404).json({ message: 'Product not found' });
    }
    sanpham.luot_xem += 1;
    await sanpham.save();
    res.status(200).json(sanpham); // Trả về sản phẩm thay vì sku
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
});

module.exports = router;