const mongoose = require('mongoose');

// Định nghĩa schema cho giỏ hàng
const gioHangSchema = new mongoose.Schema({
  id_nguoi_dung: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'nguoi_dung',
    required: true
  }, // Tham chiếu đến người dùng
  items: [{
    id_thuoc_tinh: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'san_pham.variants',
      required: true
    }, // Tham chiếu đến biến thể sản phẩm
    so_luong: {
      type: Number,
      min: 1,
      required: true
    }, // Số lượng sản phẩm
    gia: {
      type: Number,
      min: 0,
      required: true
    } // Giá tại thời điểm thêm (lấy từ gia hoặc gia_km)
  }], // Danh sách sản phẩm trong giỏ hàng
  updated_at: {
    type: Date,
    default: Date.now
  } // Thời gian cập nhật
}, { collection: 'gio_hang' });

// Middleware để cập nhật updated_at
gioHangSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});


// Export model
module.exports = gioHangSchema;