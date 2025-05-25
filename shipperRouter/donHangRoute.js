const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/fashion_web25');
const express = require('express');
const router = express.Router();
const DonHangSchema = require('../model/schemaDonHang');

// Route lấy tất cả đơn hàng
router.get('/get-all-orders', async (req, res) => {
   try {
        const donHang = await conn.model('don_hang', DonHangSchema).find();
        res.status(200).json(donHang);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi server' });
    }
});


module.exports = router;