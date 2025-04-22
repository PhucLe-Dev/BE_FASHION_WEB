const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Khởi tạo ứng dụng Express
const app = express();
const port = 3000;

// Middleware để parse JSON và cho phép CORS
app.use([cors(), express.json()]);

// Kết nối MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/fashion_web25', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Route cơ bản để kiểm tra API
app.get('/', (req, res) => {
  res.json({ thongbao: 'API NodeJS cho LuxuryFashion' });
});

// Các route khác sẽ được thêm sau
// (API cho sản phẩm, danh mục, người dùng, v.v.)

// Khởi động server
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên port ${port}`);
});