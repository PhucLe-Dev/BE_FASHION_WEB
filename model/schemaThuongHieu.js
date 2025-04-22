const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

// Kích hoạt plugin slug
mongoose.plugin(slug);

// Định nghĩa schema cho thương hiệu
const thuongHieuSchema = new mongoose.Schema({
  ten_thuong_hieu: { type: String, required: true }, // Tên thương hiệu (ví dụ: "Gucci")
  slug: { type: String, slug: 'ten_thuong_hieu', unique: true }, // Slug tự động
  mo_ta: { type: String, default: '' }, // Mô tả thương hiệu
  hinh: { type: String, default: '' }, // Logo thương hiệu
  an_hien: { type: Boolean, default: true }, // Ẩn/hiện
  meta_title: { type: String, default: '' }, // Tiêu đề SEO
  meta_description: { type: String, default: '' }, // Mô tả SEO
  meta_keywords: { type: String, default: '' }, // Từ khóa SEO
  created_at: { type: Date, default: Date.now }, // Thời gian tạo
  updated_at: { type: Date, default: Date.now } // Thời gian cập nhật
}, { collection: 'thuong_hieu' });

// Middleware để cập nhật updated_at
thuongHieuSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// Tạo index để tối ưu truy vấn
thuongHieuSchema.index({ slug: 1 });

// Export model
module.exports = mongoose.model('ThuongHieu', thuongHieuSchema);