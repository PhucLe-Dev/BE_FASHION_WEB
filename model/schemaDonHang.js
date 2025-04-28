const mongoose = require('mongoose');

// Định nghĩa schema cho đơn hàng
const donHangSchema = new mongoose.Schema({
  id_nguoi_dung: { type: mongoose.Schema.Types.ObjectId, ref: 'NguoiDung', required: true }, // Tham chiếu người dùng
  ma_don_hang: { type: String, unique: true, required: true }, // Mã đơn hàng (ví dụ: "DH001")
  chi_tiet: [{
    id_thuoc_tinh: { type: mongoose.Schema.Types.ObjectId, ref: 'ThuocTinhSanPham', required: true }, // Tham chiếu biến thể
    so_luong: { type: Number, min: 1, required: true }, // Số lượng
    gia: { type: Number, min: 0, required: true } // Giá tại thời điểm mua
  }], // Chi tiết đơn hàng
  tong_tien: { type: Number, min: 0, required: true }, // Tổng tiền
  email: {type: String, required: true},
  sdt: {type: String, default: ''},
  dia_chi_giao_hang: { type: String, required: true }, // Địa chỉ giao
  phuong_thuc_thanh_toan: { type: String, enum: ['cod', 'Thẻ tín dụng'], required: true }, // Phương thức thanh toán
  trang_thai: { type: String, enum: ['cho_xac_nhan', 'dang_giao', 'da_giao', 'huy'], default: 'cho_xac_nhan' }, // Trạng thái
  id_khuyen_mai: { type: mongoose.Schema.Types.ObjectId, ref: 'KhuyenMai', default: null }, // Tham chiếu khuyến mãi
  ghi_chu: { type: String, default: '' }, // Ghi chú
  created_at: { type: Date, default: Date.now }, // Thời gian tạo
  updated_at: { type: Date, default: Date.now } // Thời gian cập nhật
}, { collection: 'don_hang' });

// Middleware để cập nhật updated_at
donHangSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// Tạo index để tối ưu truy vấn
donHangSchema.index({ id_nguoi_dung: 1 });
donHangSchema.index({ ma_don_hang: 1 });

// Export model
module.exports = mongoose.model('DonHang', donHangSchema);