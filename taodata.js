const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const slugify = require('slugify');

// Kết nối MongoDB
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/fashion_web25');

// Import các schema
const LoaiSanPham = require('./model/schemaLoaiSanPham');
const ThuongHieu = require('./model/schemaThuongHieu');
const SanPham = require('./model/schemaSanPham');
const NguoiDung = require('./model/schemaNguoiDung');
const DonHang = require('./model/schemaDonHang');
const BinhLuan = require('./model/schemaBinhLuan');
const GioHang = require('./model/schemaGioHang');

// Import dữ liệu mẫu
const {
  loai_arr,
  thuong_hieu_arr,
  sp_arr,
  nguoi_dung_arr,
  don_hang_arr,
  binh_luan_arr,
  gio_hang_arr
} = require('./data');

// Hàm sinh SKU duy nhất
const generateUniqueSKU = async () => {
  const SanPhamModel = conn.model('san_pham', SanPham);
  const sku = `${uuidv4().slice(0, 8).toUpperCase()}_${uuidv4().slice(0, 4).toUpperCase()}`;
  const existing = await SanPhamModel.findOne({ 'variants.sku': sku });
  if (!existing) return sku;
  return generateUniqueSKU();
};

// Hàm sinh ngẫu nhiên
let randomCreate = function (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
};

// Hàm chèn danh mục
const chen_loai = async () => {
  const LoaiSanPhamModel = conn.model('loai_san_pham', LoaiSanPham);
  await LoaiSanPhamModel.deleteMany({}).then(obj => console.log(`Đã xóa ${obj.deletedCount} danh mục`));
  for (let loai of loai_arr) {
    let newLoai = new LoaiSanPhamModel(loai);
    await newLoai.save();
  }
  console.log('Chèn danh mục thành công');
};

// Hàm chèn thương hiệu
const chen_thuong_hieu = async () => {
  const ThuongHieuModel = conn.model('thuong_hieu', ThuongHieu);
  await ThuongHieuModel.deleteMany({}).then(obj => console.log(`Đã xóa ${obj.deletedCount} thương hiệu`));
  for (let thuongHieu of thuong_hieu_arr) {
    let newThuongHieu = new ThuongHieuModel(thuongHieu);
    await newThuongHieu.save();
  }
  console.log('Chèn thương hiệu thành công');
};

// Hàm chèn sản phẩm
const chen_sp = async () => {
  const SanPhamModel = conn.model('san_pham', SanPham);
  await SanPhamModel.deleteMany({}).then(obj => console.log(`Đã xóa ${obj.deletedCount} sản phẩm`));

  for (let sp of sp_arr) {

    sp.luot_xem = randomCreate(1, 2000);
    let ngay = randomCreate(2023, 2026) + "-" + randomCreate(1, 13) + "-" + randomCreate(1, 29);
    let gio = randomCreate(0, 24) + ":" + randomCreate(0, 60) + ":" + randomCreate(0, 60);
    sp.created_at = ngay + " " + gio;
    sp.updated_at = ngay + " " + gio;
    sp.slug = slugify(sp.ten_sp, { lower: true, strict: true }) + "-" + sp._id;

    for (let variant of sp.variants) {
      try {
        variant.sku = await generateUniqueSKU();
        variant.so_luong = randomCreate(1, 20);
        variant.so_luong_ban = randomCreate(1, 19);
      } catch (error) {
        console.error(`Lỗi khi tạo SKU cho sản phẩm ${sp.ten_sp}:`, error.message);
        return;
      }
    }

    let newSp = new SanPhamModel(sp);
    try {
      await newSp.save();
    } catch (error) {
      console.error(`Lỗi khi chèn sản phẩm ${sp.ten_sp}:`, error.message);
    }
  }
  console.log('Chèn sản phẩm thành công');
};

// Hàm chèn người dùng
const chen_nguoi_dung = async () => {
  const NguoiDungModel = conn.model('nguoi_dung', NguoiDung);
  await NguoiDungModel.deleteMany({}).then(obj => console.log(`Đã xóa ${obj.deletedCount} người dùng`));
  for (let nguoiDung of nguoi_dung_arr) {
    let newNguoiDung = new NguoiDungModel(nguoiDung);
    await newNguoiDung.save();
  }
  console.log('Chèn người dùng thành công');
};

// Hàm chèn đơn hàng
const chen_don_hang = async () => {
  const DonHangModel = conn.model('don_hang', DonHang);
  await DonHangModel.deleteMany({}).then(obj => console.log(`Đã xóa ${obj.deletedCount} đơn hàng`));
  for (let donHang of don_hang_arr) {
    let newDonHang = new DonHangModel(donHang);
    await newDonHang.save();
  }
  console.log('Chèn đơn hàng thành công');
};

// Hàm chèn bình luận
const chen_binh_luan = async () => {
  const BinhLuanModel = conn.model('binh_luan', BinhLuan);
  await BinhLuanModel.deleteMany({}).then(obj => console.log(`Đã xóa ${obj.deletedCount} bình luận`));
  for (let binhLuan of binh_luan_arr) {
    let newBinhLuan = new BinhLuanModel(binhLuan);
    await newBinhLuan.save();
  }
  console.log('Chèn bình luận thành công');
};

// Hàm chèn giỏ hàng
const chen_gio_hang = async () => {
  const GioHangModel = conn.model('gio_hang', GioHang);
  await GioHangModel.deleteMany({}).then(obj => console.log(`Đã xóa ${obj.deletedCount} giỏ hàng`));
  for (let gioHang of gio_hang_arr) {
    let newGioHang = new GioHangModel(gioHang);
    await newGioHang.save();
  }
  console.log('Chèn giỏ hàng thành công');
};

// Hàm chính để chạy tất cả
(async () => {
  await chen_loai();
  await chen_thuong_hieu();
  await chen_sp();
  await chen_nguoi_dung();
  await chen_don_hang();
  await chen_binh_luan();
  await chen_gio_hang();
  console.log('Hoàn tất chèn dữ liệu');
  process.exit();
})();