const express = require('express');
// Kết nối MongoDB
const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/fashion_web25');

const cors = require('cors');

// Khởi tạo ứng dụng Express
const app = express();
const port = 3000;

// Middleware để parse JSON và cho phép CORS
app.use([cors(), express.json()]);


// Route cơ bản để kiểm tra API
app.get('/', (req, res) => {
  res.json({ thongbao: 'API NodeJS cho fashion_web25'});
});

// Import các router
// Router user cho sản phẩm
const userRouterSP = require('./userRouter/userRouteApi');
app.use('/api/user', userRouterSP);

// Các route khác sẽ được thêm sau
// (API cho sản phẩm, danh mục, người dùng, v.v.)

// Khởi động server
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên port ${port}`);
});