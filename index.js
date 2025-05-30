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
// Router cho user
// Router user cho sản phẩm
const userRouterSP = require('./userRouter/userRouteSanPham');
app.use('/api/user', userRouterSP);


// Router cho addmin
// Router admin cho sản phẩm
const adminRouterSP = require('./adminRouter/adminRouterSanPham');
app.use('/api/admin/san-pham/', adminRouterSP);
// Router admin cho variants
const adminRouterVariants = require('./adminRouter/adminRouteVariants');
app.use('/api/admin/variants/', adminRouterVariants);

// Router cho shipper 
// Router shipper cho đơn hàng
const shipperRouterDonHang = require('./shipperRouter/donHangRoute');
app.use('/api/shipper/order', shipperRouterDonHang);


// Các route viết cùng ở đây


// Khởi động server
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên port ${port}`);
});