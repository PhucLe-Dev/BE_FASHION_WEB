const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

// Kích hoạt plugin slug
mongoose.plugin(slug);

// Định nghĩa schema cho danh mục sản phẩm
const loaiSanPhamSchema = new mongoose.Schema({
  id: { type: Number, unique: true, min: 1 }, // ID 
  ten_loai: { type: String, required: true }, // Tên danh mục (ví dụ: "Áo sơ mi")
  slug: { type: String, slug: 'ten_loai', unique: true }, // Slug tự động từ ten_loai
  mo_ta: { type: String, default: '' }, // Mô tả danh mục
  hinh: { type: String, default: '' }, // Ảnh đại diện danh mục
  thu_tu: { type: Number, default: 0 }, // Thứ tự hiển thị
  an_hien: { type: Boolean, default: true }, // Ẩn/hiện danh mục
  meta_title: { type: String, default: '' }, // Tiêu đề SEO
  meta_description: { type: String, default: '' }, // Mô tả SEO
  meta_keywords: { type: String, default: '' }, // Từ khóa SEO
  created_at: { type: Date, default: Date.now }, // Thời gian tạo
  updated_at: { type: Date, default: Date.now } // Thời gian cập nhật
}, { collection: 'loai_san_pham' });

// Middleware để cập nhật updated_at
loaiSanPhamSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// Export model
module.exports = loaiSanPhamSchema;