const mongoose = require('mongoose');

// Định nghĩa schema cho bình luận
const binhLuanSchema = new mongoose.Schema({
  id_san_pham: { type: mongoose.Schema.Types.ObjectId, ref: 'san_pham', required: true }, // Tham chiếu sản phẩm
  id_nguoi_dung: { type: mongoose.Schema.Types.ObjectId, ref: 'nguoi_dung', required: true }, // Tham chiếu người dùng
  ho_ten: { type: String, required: true }, // Họ tên người bình luận
  diem: { type: Number, min: 1, max: 5, default: null }, // Điểm đánh giá (1-5 sao)
  noi_dung: { type: String, required: true }, // Nội dung bình luận
  an_hien: { type: Boolean, default: true }, // Ẩn/hiện bình luận
  created_at: { type: Date, default: Date.now }, // Thời gian tạo
  updated_at: { type: Date, default: Date.now } // Thời gian cập nhật
}, { collection: 'binh_luan' });

// Middleware để cập nhật updated_at
binhLuanSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// Export model
module.exports = binhLuanSchema;