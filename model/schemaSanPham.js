const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

// Kích hoạt plugin slug để tự động tạo slug từ tên sản phẩm
mongoose.plugin(slug);

// Định nghĩa schema cho sản phẩm
const sanPhamSchema = new mongoose.Schema({
  ten_sp: { type: String, required: true }, // Tên sản phẩm (ví dụ: "Áo sơ mi nam Gucci")
  slug: { type: String, slug: 'ten_sp', unique: true }, // Slug tự động từ ten_sp (ví dụ: "ao-so-mi-nam-gucci")
  id_loai: { type: mongoose.Schema.Types.ObjectId, ref: 'LoaiSanPham', required: true }, // Tham chiếu danh mục (ví dụ: Áo sơ mi)
  id_thuong_hieu: { type: mongoose.Schema.Types.ObjectId, ref: 'ThuongHieu', default: null }, // Tham chiếu thương hiệu (ví dụ: Gucci)
  mo_ta: { type: String, default: '' }, // Mô tả sản phẩm
  chat_lieu: { type: String, default: '' }, // Chất liệu (ví dụ: "Lụa")
  xuat_xu: { type: String, default: '' }, // Xuất xứ (ví dụ: "Ý")
  variants: [{
    sku: { type: String, required: true }, // Mã SKU của biến thể (ví dụ: "ASM-GUCCI-WHITE-M")
    kich_thuoc: { type: String, enum: ['S', 'M', 'L', 'XL', 'XXL'], required: true }, // Kích thước
    mau_sac: { type: String, required: true }, // Màu sắc
    gia: { type: Number, min: 0, required: true }, // Giá của biến thể
    gia_km: { type: Number, min: 0, default: null }, // Giá khuyến mãi
    so_luong: { type: Number, min: 0, default: 0 }, // Số lượng tồn kho
    so_luong_da_ban: { type: Number, min: 0, default: 0 }, // Số lượng đã bán
    hinh_chinh: { type: String, default: '' }, // Ảnh chính của biến thể
    hinh_thumbnail: [{ type: String }], // Mảng ảnh thumbnail của biến thể
  }], // Mảng các biến thể (kích thước, màu sắc, giá, ảnh)
  hot: { type: Boolean, default: false }, // Sản phẩm nổi bật
  luot_xem: { type: Number, min: 0, default: 0 }, // Lượt xem
  an_hien: { type: Boolean, default: true }, // Ẩn/hiện sản phẩm
  tags: [{ type: String }], // Từ khóa tìm kiếm (ví dụ: ["áo sơ mi", "nam"])
  meta_title: { type: String, default: '' }, // Tiêu đề SEO
  meta_description: { type: String, default: '' }, // Mô tả SEO
  meta_keywords: { type: String, default: '' }, // Từ khóa SEO
  created_at: { type: Date, default: Date.now }, // Thời gian tạo
  updated_at: { type: Date, default: Date.now } // Thời gian cập nhật
}, { collection: 'san_pham' });

// Middleware để cập nhật updated_at mỗi khi lưu
sanPhamSchema.pre('save', function(next) {
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