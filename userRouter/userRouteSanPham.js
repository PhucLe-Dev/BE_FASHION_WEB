const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/fashion_web25');
const express = require('express');
const router = express.Router();
const SanPhamSchema = require('../model/schemaSanPham');
const LoaiSanPhamSchema = require('../model/schemaLoaiSanPham');
const ThuongHieuSchema = require('../model/schemaThuongHieu');

// Route để lấy danh sách sản phẩm với phân trang
router.get('/san-pham', async (req, res) => {
  try {
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    const limit = parseInt(req.query.limit) || 20;
    const isRandom = req.query.random === 'true';

    if (limit < 1 || isNaN(limit)) {
      return res.status(400).json({ message: 'Số lượng sản phẩm không hợp lệ' });
    }

    const matchCondition = { an_hien: true };

    if (isRandom) {
      // Sản phẩm ngẫu nhiên
      const listSanPham = await SanPhamModel.aggregate([
        { $match: matchCondition },
        { $sample: { size: limit } },
        {
          $lookup: {
            from: "thuong_hieu",
            localField: "id_thuong_hieu",
            foreignField: "id",
            as: "thuong_hieu"
          }
        },
        {
          $unwind: {
            path: "$thuong_hieu",
            preserveNullAndEmptyArrays: true
          }
        }
      ]);

      return res.status(200).json({
        data: listSanPham,
        pagination: null
      });
    }

    // Nếu không phải random → phân trang + join thông tin thương hiệu
    const page = parseInt(req.query.page) || 1;
    if (page < 1 || isNaN(page)) {
      return res.status(400).json({ message: 'Trang không hợp lệ' });
    }

    const skip = (page - 1) * limit;

    const totalProducts = await SanPhamModel.countDocuments(matchCondition);
    const totalPages = Math.ceil(totalProducts / limit);

    const listSanPham = await SanPhamModel.aggregate([
      { $match: matchCondition },
      { $sort: { _id: -1 } }, // Tùy bạn muốn sort thế nào
      { $skip: skip },
      { $limit: limit },
      {
        $lookup: {
          from: "thuong_hieu",
          localField: "id_thuong_hieu",
          foreignField: "id",
          as: "thuong_hieu"
        }
      },
      {
        $unwind: {
          path: "$thuong_hieu",
          preserveNullAndEmptyArrays: true
        }
      }
    ]);

    return res.status(200).json({
      data: listSanPham,
      pagination: {
        currentPage: page,
        limit,
        totalProducts,
        totalPages
      }
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

    // Lấy tham số từ query string
    const page = parseInt(req.query.page) || 1; // Mặc định là trang 1
    const limit = parseInt(req.query.limit) || 4; // Mặc định lấy 4 loại sản phẩm mỗi trang

    // Validate page và limit
    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng loại sản phẩm không hợp lệ' });
    }

    // Tính số loại sản phẩm cần bỏ qua (skip)
    const skip = (page - 1) * limit;

    // Truy vấn MongoDB
    const totalProducts = await LoaiSanPhamModel.countDocuments({ an_hien: true }); // Tổng số loại sản phẩm
    const listLoaiSanPham = await LoaiSanPhamModel.find({ an_hien: true })
      .skip(skip) // Bỏ qua các loại sản phẩm của trang trước
      .limit(limit) // Giới hạn số loại sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listLoaiSanPham,
      pagination: {
        currentPage: page,
        limit: limit,
        totalProducts: totalProducts,
        totalPages: totalPages
      }
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

    // Lấy tham số từ query string
    const page = parseInt(req.query.page) || 1; // Mặc định là trang 1
    const limit = parseInt(req.query.limit) || 4; // Mặc định lấy 4 thuong hiệu mỗi trang

    // Validate page và limit
    if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
      return res.status(400).json({ message: 'Trang hoặc số lượng thuong hiệu không hợp lệ' });
    }

    // Tính số thuong hiệu cần bỏ qua (skip)
    const skip = (page - 1) * limit;

    // Truy vấn MongoDB
    const totalProducts = await ThuongHieuModel.countDocuments({ an_hien: true }); // Tổng số thuong hiệu
    const listThuongHieu = await ThuongHieuModel.find({ an_hien: true })
      .skip(skip) // Bỏ qua các thuong hiệu của trang trước
      .limit(limit) // Giới hạn số thuong hiệu
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listThuongHieu,
      pagination: {
        currentPage: page,
        limit: limit,
        totalProducts: totalProducts,
        totalPages: totalPages
      }
    });
  } catch (error) {
    console.error('Error fetching categories products:', error);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách loại sản phẩm', error: error.message });
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

// Route để lấy danh sách sản phẩm củ với phân trang
router.get('/san-pham-cu', async (req, res) => {
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
    const listSanPhamCu = await SanPhamModel.find({ an_hien: true })
      .sort({ created_at: 1 }) // Sắp xếp theo lượt xem giảm dần
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamCu,
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

// Route để lấy danh sách sản phẩm loại đồ nam với phân trang
router.get('/san-pham-nam', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, id_loai: 1 }); // Tổng số sản phẩm
    const listSanPhamNam = await SanPhamModel.find({ an_hien: true, id_loai: 1 })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamNam,
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

// Route để lấy danh sách sản phẩm loại đồ nữ với phân trang
router.get('/san-pham-nu', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, id_loai: 2 }); // Tổng số sản phẩm
    const listSanPhamNu = await SanPhamModel.find({ an_hien: true, id_loai: 2 })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamNu,
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

// Route để lấy danh sách sản phẩm loại túi xách với phân trang
router.get('/san-pham-tui-xach', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, id_loai: 3 }); // Tổng số sản phẩm
    const listSanPhamTuiXach = await SanPhamModel.find({ an_hien: true, id_loai: 3 })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamTuiXach,
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

// Route để lấy danh sách sản phẩm loại phụ kiện với phân trang
router.get('/san-pham-phu-kien', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, id_loai: 4 }); // Tổng số sản phẩm
    const listSanPhamPhuKien = await SanPhamModel.find({ an_hien: true, id_loai: 4 })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamPhuKien,
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

// Route để lấy danh sách sản phẩm brand dior với phân trang
router.get('/san-pham-dior', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, id_thuong_hieu: 1 }); // Tổng số sản phẩm
    const listSanPhamDior = await SanPhamModel.find({ an_hien: true, id_thuong_hieu: 1 })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamDior,
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

// Route để lấy danh sách sản phẩm brand gucci với phân trang
router.get('/san-pham-gucci', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, id_thuong_hieu: 2 }); // Tổng số sản phẩm
    const listSanPhamGucci = await SanPhamModel.find({ an_hien: true, id_thuong_hieu: 2 })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamGucci,
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

// Route để lấy danh sách sản phẩm brand chanel với phân trang
router.get('/san-pham-chanel', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, id_thuong_hieu: 3 }); // Tổng số sản phẩm
    const listSanPhamChanel = await SanPhamModel.find({ an_hien: true, id_thuong_hieu: 3 })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamChanel,
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

// Route để lấy danh sách sản phẩm brand louis-vuitton với phân trang
router.get('/san-pham-louis-vuitton', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, id_thuong_hieu: 4 }); // Tổng số sản phẩm
    const listSanPhamLouisVuitton = await SanPhamModel.find({ an_hien: true, id_thuong_hieu: 4 })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamLouisVuitton,
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

// Route để lấy danh sách sản phẩm Italy với phân trang
router.get('/san-pham-italy', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, xuat_xu: 'Ý' }); // Tổng số sản phẩm
    const listSanPhamItaly = await SanPhamModel.find({ an_hien: true, xuat_xu: 'Ý' })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamItaly,
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

// Route để lấy danh sách sản phẩm Pháp với phân trang
router.get('/san-pham-phap', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, xuat_xu: 'Pháp' }); // Tổng số sản phẩm
    const listSanPhamPhap = await SanPhamModel.find({ an_hien: true, xuat_xu: 'Pháp' })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamPhap,
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

// Route để lấy danh sách sản phẩm Đức với phân trang
router.get('/san-pham-duc', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, xuat_xu: 'Đức' }); // Tổng số sản phẩm
    const listSanPhamDuc = await SanPhamModel.find({ an_hien: true, xuat_xu: 'Đức' })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamDuc,
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

// Route để lấy danh sách sản phẩm Nhật với phân trang
router.get('/san-pham-nhat', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, xuat_xu: 'Nhật Bản' }); // Tổng số sản phẩm
    const listSanPhamNhat = await SanPhamModel.find({ an_hien: true, xuat_xu: 'Nhật Bản' })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamNhat,
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

// Route để lấy danh sách sản phẩm giá tăng với phân trang
router.get('/san-pham-gia-tang', async (req, res) => {
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

    // Aggregation Pipeline để sắp xếp theo giá tăng dần
    const pipeline = [
      // Lọc các sản phẩm hiển thị
      { $match: { an_hien: true } },

      // Mở rộng mảng variants
      { $unwind: '$variants' },

      // Thêm trường minPrice để tính giá thấp nhất (ưu tiên gia_km nếu có)
      {
        $addFields: {
          minPrice: {
            $cond: {
              if: { $and: [{ $ne: ['$variants.gia_km', null] }, { $gt: ['$variants.gia_km', 0] }] },
              then: '$variants.gia_km',
              else: '$variants.gia'
            }
          }
        }
      },

      // Nhóm lại theo sản phẩm, lấy giá thấp nhất
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
          minPrice: { $min: '$minPrice' } // Lấy giá thấp nhất của sản phẩm
        }
      },

      // Sắp xếp theo minPrice tăng dần
      { $sort: { minPrice: 1 } },

      // Phân trang
      { $skip: skip },
      { $limit: limit }
    ];  

    // Thực hiện aggregation
    const listSanPhamGiaTang = await SanPhamModel.aggregate(pipeline).exec();

    // Đếm tổng số sản phẩm
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true });

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamGiaTang,
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

// Route để lấy danh sách sản phẩm giá giảm với phân trang
router.get('/san-pham-gia-giam', async (req, res) => {
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

    // Aggregation Pipeline để sắp xếp theo giá giảm dần
    const pipeline = [
      // Lọc các sản phẩm hiển thị
      { $match: { an_hien: true } },

      // Mở rộng mảng variants
      { $unwind: '$variants' },

      // Thêm trường maxPrice để tính giá cao nhất (ưu tiên gia_km nếu có)
      {
        $addFields: {
          maxPrice: {
            $cond: {
              if: { $and: [{ $ne: ['$variants.gia_km', null] }, { $gt: ['$variants.gia_km', 0] }] },
              then: '$variants.gia_km',
              else: '$variants.gia'
            }
          }
        }
      },

      // Nhóm lại theo sản phẩm, lấy giá thấp nhất
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
          maxPrice: { $max: '$maxPrice' } // Lấy giá cao nhất của sản phẩm
        }
      },

      // Sắp xếp theo minPrice tăng dần
      { $sort: { maxPrice: -1 } },

      // Phân trang
      { $skip: skip },
      { $limit: limit }
    ];  

    // Thực hiện aggregation
    const listSanPhamGiaGiam = await SanPhamModel.aggregate(pipeline).exec();

    // Đếm tổng số sản phẩm
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true });

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamGiaGiam,
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

// Route để lấy danh sách sản phẩm giảm giá với phân trang
router.get('/san-pham-giam-gia', async (req, res) => {
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
    const totalProducts = await SanPhamModel.countDocuments({ an_hien: true, 'variants.gia_km': { $ne: null } }); // Tổng số sản phẩm
    const listSanPhamGiamGia = await SanPhamModel.find({ an_hien: true, 'variants.gia_km': { $ne: null } })
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamGiamGia,
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

// Route để lấy danh sách sản phẩm bán chạy với phân trang
router.get('/san-pham-ban-chay', async (req, res) => {
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
    const listSanPhamBanChay = await SanPhamModel.find({ an_hien: true })
      .sort({ 'variants.so_luong_da_ban': -1 }) // Sắp xếp theo số lượng sp đã bán
      .skip(skip) // Bỏ qua các sản phẩm của trang trước
      .limit(limit) // Giới hạn số sản phẩm
      .exec();

    // Tính tổng số trang
    const totalPages = Math.ceil(totalProducts / limit);

    // Trả về kết quả
    res.status(200).json({
      data: listSanPhamBanChay,
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

// Route để lấy danh sách sản phẩm theo SKU
router.get('/san-pham/:sku', async (req, res) => {
  try {
    const sku = req.params.sku;
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    // Sử dụng aggregate với $lookup để join thông tin
    let sanpham = await SanPhamModel.aggregate([
      // Tìm sản phẩm có SKU trong variants
      { $match: { "variants.sku": sku } },
      // Join với collection thuong_hieu
      {
        $lookup: {
          from: 'thuong_hieu', // Tên collection thương hiệu
          localField: 'id_thuong_hieu', // Trường trong san_pham
          foreignField: 'id', // Trường trong thuong_hieu
          as: 'thuong_hieu' // Tên trường để lưu thông tin thương hiệu
        }
      },
      // Join với collection loai_san_pham
      {
        $lookup: {
          from: 'loai_san_pham', // Tên collection loại sản phẩm
          localField: 'id_loai', // Trường trong san_pham
          foreignField: 'id', // Trường trong loai_san_pham
          as: 'loai_san_pham' // Tên trường để lưu thông tin loại sản phẩm
        }
      },
      // Giải nén mảng thuong_hieu và loai_san_pham (vì $lookup trả về mảng)
      { $unwind: { path: '$thuong_hieu', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$loai_san_pham', preserveNullAndEmptyArrays: true } },
      // Tăng luot_xem
      { $set: { luot_xem: { $add: ['$luot_xem', 1] } } }
    ]);

    if (!sanpham || sanpham.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Cập nhật luot_xem trong database
    await SanPhamModel.updateOne({ "variants.sku": sku }, { $inc: { luot_xem: 1 } });

    // Trả về sản phẩm đầu tiên (vì SKU là duy nhất)
    res.status(200).json(sanpham[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
});

// Route để lấy danh sách sản phẩm theo id loại sản phẩm và id thương hiệu
router.get('/san-pham-lien-quan/:sku', async (req, res) => {
  try {
    const sku = req.params.sku;
    const SanPhamModel = conn.model('san_pham', SanPhamSchema);

    // Bước 1: Lấy thông tin sản phẩm chi tiết để lấy id_loai và id_thuong_hieu
    const currentProduct = await SanPhamModel.aggregate([
      { $match: { "variants.sku": sku } },
      {
        $lookup: {
          from: 'thuong_hieu',
          localField: 'id_thuong_hieu',
          foreignField: 'id',
          as: 'thuong_hieu'
        }
      },
      {
        $lookup: {
          from: 'loai_san_pham',
          localField: 'id_loai',
          foreignField: 'id',
          as: 'loai_san_pham'
        }
      },
      { $unwind: { path: '$thuong_hieu', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$loai_san_pham', preserveNullAndEmptyArrays: true } },
      { $limit: 1 } // Chỉ lấy 1 sản phẩm (vì SKU là duy nhất)
    ]);

    if (!currentProduct || currentProduct.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const { id_loai, id_thuong_hieu } = currentProduct[0];

    // Bước 2: Tìm 4 sản phẩm liên quan dựa trên id_loai và id_thuong_hieu
    const relatedProducts = await SanPhamModel.aggregate([
      {
        $match: {
          $and: [
            { id_loai: id_loai }, // Sản phẩm cùng loại
            { id_thuong_hieu: id_thuong_hieu }, // Sản phẩm cùng thương hiệu
            { "variants.sku": { $ne: sku } } // Loại trừ sản phẩm hiện tại
          ]
        }
      },
      {
        $lookup: {
          from: 'thuong_hieu',
          localField: 'id_thuong_hieu',
          foreignField: 'id',
          as: 'thuong_hieu'
        }
      },
      {
        $lookup: {
          from: 'loai_san_pham',
          localField: 'id_loai',
          foreignField: 'id',
          as: 'loai_san_pham'
        }
      },
      { $unwind: { path: '$thuong_hieu', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$loai_san_pham', preserveNullAndEmptyArrays: true } },
      { $sample: { size: 4 } } // Lấy ngẫu nhiên 4 sản phẩm
    ]);

    // Bước 3: Trả về danh sách sản phẩm liên quan
    res.status(200).json(relatedProducts);
  } catch (error) {
    console.error('Error fetching related products:', error);
    res.status(500).json({ message: 'Error fetching related products', error: error.message });
  }
});

// Route API bình luận 


module.exports = router;