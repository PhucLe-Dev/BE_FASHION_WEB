const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { gio_hang_arr } = require('../data');

// Kích hoạt plugin slug
mongoose.plugin(slug);
// Định nghĩa schema cho sản phẩm
const sanPhamSchema = new mongoose.Schema({
  ten_sp: { type: String, required: true },
  slug: { type: String, slug: 'ten_sp', unique: true }, // Slug tự động từ ten_loai
  id_loai: { type: mongoose.Schema.Types.ObjectId, ref: 'LoaiSanPham', required: true },
  id_thuong_hieu: { type: mongoose.Schema.Types.ObjectId, ref: 'ThuongHieu', default: null },
  mo_ta: { type: String, default: '' },
  chat_lieu: { type: String, default: '' },
  xuat_xu: { type: String, default: '' },
  variants: [{
    sku: { type: String, required: true },
    kich_thuoc: { type: String, required: true },
    mau_sac: { type: String, required: true },
    gia: { type: Number, min: 0, required: true },
    gia_km: { type: Number, min: 0, default: null },
    so_luong: { type: Number, min: 0, default: 0 },
    so_luong_da_ban: { type: Number, min: 0, default: 0 },
    hinh_chinh: { type: String, default: '' },
    hinh_thumbnail: [{ type: String }],
  }],
  hot: { type: Boolean, default: false },
  an_hien: { type: Boolean, default: true },
  luot_xem: { type: Number, min: 0, default: 0 },
  tags: [{ type: String }],
  meta_title: { type: String, default: '' },
  meta_description: { type: String, default: '' },
  meta_keywords: { type: String, default: '' },
  ngay: { type: Date, default: Date.now },
  gio: { type: String, default: '' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}, { collection: 'san_pham' });

// Tạo slug từ ten_sp + _id
sanPhamSchema.pre('save', function(next) {
  if (this.isModified('ten_sp') || !this.slug) {
    const slugifiedName = this.ten_sp.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    this.slug = `${slugifiedName}_${this._id}`;
  }
  this.updated_at = Date.now();
  next();
});

// Tạo index để tối ưu truy vấn
sanPhamSchema.index({ slug: 1 });
sanPhamSchema.index({ id_loai: 1 });
sanPhamSchema.index({ id_thuong_hieu: 1 });
sanPhamSchema.index({ tags: 1 });

// Export model
module.exports = mongoose.model('SanPham', sanPhamSchema);