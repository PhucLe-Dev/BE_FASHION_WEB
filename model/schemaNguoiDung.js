const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Định nghĩa schema cho người dùng
const nguoiDungSchema = new mongoose.Schema({
  ho_ten: { type: String, required: true }, // Họ tên
  hinh: { type: String, default: '' }, // Hình ảnh đại diện
  email: { type: String, unique: true, required: true }, // Email (duy nhất)
  mat_khau: { type: String, required: true }, // Mật khẩu (mã hóa)
  so_dien_thoai: { type: String, default: '' }, // Số điện thoại
  dia_chi: { type: String, default: '' }, // Địa chỉ mặc định
  vai_tro: { type: String, enum: ['khach_hang', 'admin', 'nhan_vien'], default: 'khach_hang' }, // Vai trò
  trang_thai: { type: Boolean, default: true }, // Trạng thái tài khoản
  created_at: { type: Date, default: Date.now }, // Thời gian tạo
  updated_at: { type: Date, default: Date.now } // Thời gian cập nhật
}, { collection: 'nguoi_dung' });

// Middleware để mã hóa mật khẩu trước khi lưu
nguoiDungSchema.pre('save', async function(next) {
  if (this.isModified('mat_khau')) {
    this.mat_khau = await bcrypt.hash(this.mat_khau, 10);
  }
  this.updated_at = Date.now();
  next();
});

// Export model
module.exports = nguoiDungSchema;