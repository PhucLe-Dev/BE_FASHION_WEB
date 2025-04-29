const mongoose = require('mongoose');

// Định nghĩa schema cho sản phẩm
const sanPhamSchema = new mongoose.Schema({
  ten_sp: { type: String, required: true },
  slug: { type: String, default: null },
  id_loai: { type: mongoose.Schema.Types.ObjectId, ref: 'loai_san_pham', required: true },
  id_thuong_hieu: { type: mongoose.Schema.Types.ObjectId, ref: 'thuong_hieu', default: null },
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


// Export model
module.exports = sanPhamSchema;