const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

exports.fileFields = upload.fields([
  { name: 'hinh_chinh',     maxCount: 1 },  // ảnh chính (bắt buộc)
  { name: 'hinh_thumbnail', maxCount: 10 }  // thumbnail (tùy chọn, nhiều file)
]);
