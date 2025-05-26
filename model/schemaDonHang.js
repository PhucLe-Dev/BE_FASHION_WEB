const mongoose = require('mongoose');

// Định nghĩa schema cho đơn hàng
const donHangSchema = new mongoose.Schema({
  id_nguoi_dung: { type: mongoose.Schema.Types.ObjectId, ref: 'nguoi_dung', required: true }, // Tham chiếu người dùng
  id_voucher: { type: mongoose.Schema.Types.ObjectId, ref: 'voucher', required: false }, // Tham chiếu voucher
  ma_don_hang: { type: String, unique: true, required: true }, // Mã đơn hàng (ví dụ: "DH001")
  chi_tiet: [{
    id_variant: { type: mongoose.Schema.Types.ObjectId, ref: 'san_pham.variants', required: true }, // Tham chiếu biến thể
    so_luong: { type: Number, min: 1, required: true }, // Số lượng
    gia: { type: Number, min: 0, required: true } // Giá tại thời điểm mua
  }], // Chi tiết đơn hàng
  tong_tien: { type: Number, min: 0, required: true }, // Tổng tiền
  email: {type: String, required: true},
  sdt: {type: String, default: ''},
  dia_chi_giao_hang: { type: String, required: true }, // Địa chỉ giao
  phuong_thuc_thanh_toan: { type: String, enum: ['cod', 'VNPay'], required: true }, // Phương thức thanh toán
  trang_thai: { type: String, enum: ['Chờ xác nhận', 'Đã xác nhận', 'Đang chuẩn bị hàng', 'Đã giao cho shipper', 'Đang giao', 'Đã giao', 'Giao hàng thành công', 'Hủy', 'Trả hàng và hoàn tiền'], default: 'Chờ xác nhận' }, // Trạng thái
  ghi_chu: { type: String, default: '' }, // Ghi chú
  created_at: { type: Date, default: Date.now }, // Thời gian tạo
  updated_at: { type: Date, default: Date.now } // Thời gian cập nhật
}, { collection: 'don_hang' });

// Middleware để cập nhật updated_at
donHangSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// Export model
module.exports = donHangSchema;