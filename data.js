const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Tạo ObjectId giả để sử dụng trong dữ liệu mẫu
const ObjectId = mongoose.Types.ObjectId;

// Mã hóa mật khẩu mẫu
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('hehe', salt);

// Dữ liệu danh mục (LoaiSanPham)
const loai_arr = [
  { _id: new ObjectId(), ten_loai: 'Đồ nam', thu_tu: 1, an_hien: true, hinh: 'https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-productpage/folder-crossselllook/folder-homme/folder-spring-25/folder-csl-perm/block-h_25_1_look_175/44600544-1-eng-GB/h_25_1_look_175.jpg?imwidth=720' },
  { _id: new ObjectId(), ten_loai: 'Đồ nữ', thu_tu: 2, an_hien: true, hinh: 'https://kenh14cdn.com/203336854389633024/2020/12/15/https-hypebeastcom-wp-content-blogsdir-6-files-2020-12-dior-crusie-2021-lady-bag-blackpink-jisoo-4-1608050362463460465775.jpg' },
  { _id: new ObjectId(), ten_loai: 'Túi xách', thu_tu: 3, an_hien: true, hinh: 'https://www.louisvuitton.com/images/is/image/lv/W_BC_LG_LOWKEY_COOKIE_APR25_DI3.jpg?wid=1440' },
  { _id: new ObjectId(), ten_loai: 'Trang sức', thu_tu: 4, an_hien: true, hinh: 'https://vn.louisvuitton.com/content/dam/lv/online/high-end/women/jewelry/W_Jwl_Deep_Time_V3.html/jcr:content/assets/homepage/HJ_DEEPTIME_03_RUPTURE_LVCOM_2048x1152_DI3.jpg?imwidth=1440' }
];

// Dữ liệu thương hiệu (ThuongHieu)
const thuong_hieu_arr = [
  { _id: new ObjectId(), ten_thuong_hieu: 'Dior', hinh: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/300px-Dior_Logo.svg.png' },
  { _id: new ObjectId(), ten_thuong_hieu: 'Gucci', hinh: 'https://vudigital.co/wp-content/uploads/2021/08/lich-su-hinh-thanh-va-phat-trien-cua-thiet-ke-logo-gucci-1921-2021-6.jpg' },
  { _id: new ObjectId(), ten_thuong_hieu: 'Chanel', hinh: 'https://icolor.vn/wp-content/uploads/2024/08/chanel-2.png' },
  { _id: new ObjectId(), ten_thuong_hieu: 'Louis Vuitton', hinh: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/246px-Louis_Vuitton_logo_and_wordmark.svg.png' }
];

// Dữ liệu sản phẩm (SanPham)
const sp_arr = [
  // Đồ nữ
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác thắt lưng ngắn',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Chiếc áo khoác là phong cách vượt thời gian được tái hiện bởi Maria Grazia Chiuri. Được chế tác từ vải cotton và vải lanh denim màu mộc, chiếc áo khoác có kiểu dáng cắt cúp thoải mái với con ong CD thêu và thẻ da Christian Dior Paris ở mặt sau, trong khi thắt lưng tông màu làm nổi bật phần eo. Được nâng tầm bởi tay áo dài rộng, hai túi có nắp cài nút ở ngực và hai túi xẻ hai bên, chiếc áo khoác có thể kết hợp với quần jeans phù hợp để hoàn thiện vẻ ngoài.',
    chat_lieu: 'Vải',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/542V41A3078X0400_E01?$default_GHC$&crop=404,150,1193,1772&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/542V41A3078X0400_E08?$default_GHC$&crop=458,150,1085,1809&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
          'https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-productpage/folder-crossselllook/folder-fall-2025-csl/block-look_f_25_3_look_100_e17/44700687-1-eng-GB/look_f_25_3_look_100_e17.jpg?imwidth=720'
        ]
      },
    ],
    hot: true,
    tags: ['áo khoác', 'nữ', 'cao cấp'],
    meta_title: 'Áo khoác nữ Chanel cao cấp',
    meta_description: 'Mua áo khoác nữ Chanel chất liệu lụa cao cấp, xuất xứ Ý',
    meta_keywords: 'áo khoác, Chanel, nữ, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác thắt lưng ngắn hoa văn',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo khoác là phong cách vượt thời gian được tái hiện bởi Maria Grazia Chiuri. Được chế tác từ vải cotton và vải lanh denim màu mộc, chiếc áo khoác có kiểu dáng cắt cúp thoải mái với con ong CD thêu và thẻ da Christian Dior Paris ở mặt sau, trong khi thắt lưng tông màu làm nổi bật phần eo. Được nâng tầm bởi tay áo dài rộng, hai túi có nắp cài nút ở ngực và hai túi xẻ hai bên, chiếc áo khoác có thể kết hợp với quần jeans phù hợp để hoàn thiện vẻ ngoài.',
    chat_lieu: 'Vải',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/542V41A3102X1823_E01?$default_GHC$&crop=403,150,1194,1813&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_076_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_076_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      },
    ],
    hot: true,
    tags: ['áo khoác', 'nữ', 'cao cấp'],
    meta_title: 'Áo khoác nữ Dior cao cấp',
    meta_description: 'Mua áo khoác nữ Dior chất liệu lụa cao cấp, xuất xứ Ý',
    meta_keywords: 'áo khoác, Dior, nữ, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy dạ hội Dior',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Một hình bóng đặc trưng của Dior, chiếc váy dài vừa phải này phô bày họa tiết Millefiori nhiều màu, với sự kết hợp tinh tế của những bông hoa châu Á trong sắc thái mềm mại và tinh tế. Được chế tác bằng vải muslin cotton trắng, nó có kiểu dáng xòe và một dải mỏng làm nổi bật phần eo. Chiếc váy có thể được phối hợp với các sáng tạo khác của Millefiori.',
    chat_lieu: 'Taffeta',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541J90A3A75X0823_E01?$default_GHC$&crop=629,152,742,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_072_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_072_E03?$lookDefault_GH-GHC$&crop=571,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_072_E13?$lookDefault_GH-GHC$&crop=571,0,1858,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_072_E14?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['váy', 'dạ hội', 'cao cấp'],
    meta_title: 'Váy dạ hội Dior sang trọng',
    meta_description: 'Mua váy dạ hội Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Dior, dạ hội, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác Regular-Fit tay ngắn',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo khoác tay ngắn được tái hiện với tinh thần thời trang cao cấp của Nhà mốt. Được chế tác từ vải bouclé pha trộn giữa len nguyên chất và cotton màu tím, chiếc áo có kiểu dáng vừa vặn được tăng cường thêm phần cổ tròn, hai túi bên hông và khuy cài ở phía trước. Chiếc áo khoác thanh lịch này có thể mặc với váy dài vừa phải và áo cánh để hoàn thiện vẻ ngoài thời trang cao cấp.',
    chat_lieu: 'Taffeta',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Tím',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541V17A1761X4715_E01?$default_GHC$&crop=235,144,1530,1358&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_072_E14?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
        ]
      },{
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh dương',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541V17A1761X5575_E01?$default_GHC$&crop=298,150,1415,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/541V17A1761X5575_E08?$default_GHC$&crop=270,150,1460,1353&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh lá',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541V17A1761X6254_E01?$default_GHC$&crop=300,142,1401,1368&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/541V17A1761X6254_E08?$default_GHC$&crop=307,150,1387,1356&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      },
    ],
    hot: true,
    tags: ['áo', 'ngắn', 'cao cấp'],
    meta_title: 'áo ngắn Dior sang trọng',
    meta_description: 'Mua áo ngắn Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác hở vai',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Áo khoác Off-The-Shoulder được chế tác từ len đen và lụa, nổi bật với thiết kế hai hàng khuy để lộ vai. Các nút bọc vải, một đặc điểm đặc trưng của Nhà mốt, làm nổi bật phần eo. Chiếc áo khoác có thể kết hợp với toàn bộ tủ đồ Dior để tạo nên một hình bóng thanh lịch và tinh tế.',
    chat_lieu: 'Vai trần',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/841V30A1166X9000_E01?$default_GHC$&crop=412,152,1280,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/841V30A1166X9000_E08?$default_GHC$&crop=412,152,1278,1346&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/841V30A1166X9000_E09?$center_GH_GHC$&crop=0,0,1901,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'hở vai', 'cao cấp'],
    meta_title: 'áo hở vai Dior sang trọng',
    meta_description: 'Mua áo hở vai Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, hở vai, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác Dioriviera cắt ngắn',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Là một phần của bộ sưu tập Dioriviera, chiếc áo khoác này tái định hình các quy tắc thanh lịch với tinh thần thoải mái. Được chế tác bằng vải dệt kim kỹ thuật màu đen, nó có kiểu dáng vừa vặn được tô điểm bằng các cạnh màu mộc tương phản và các nút được trang trí bằng một ngôi sao. Chiếc áo khoác có thể được kết hợp với chân váy phù hợp để hoàn thiện vẻ ngoài Dioriviera.',
    chat_lieu: 'Len',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/544V11A5005X9000_E01?$default_GHC$&crop=213,150,1574,1756&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_008_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_008_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['Áo khoác', 'sang trọng', 'cao cấp'],
    meta_title: 'Áo khoác sang trọng Dior sang trọng',
    meta_description: 'Mua Áo khoác sang trọng Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Áo khoác, Dior, sang trọng, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy xòe ngắn Dioriviera',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Là một phần của bộ sưu tập Dioriviera, chiếc váy ngắn này có sức hấp dẫn thanh lịch và hiện đại. Được chế tác bằng vải cotton màu mộc và vải poplin lụa, váy có kiểu dáng xòe rộng được tôn lên bằng một dải rộng làm nổi bật phần eo, trong khi tay áo và cổ áo được tô điểm bằng những nếp gấp. Chiếc váy có thể phối hợp với các sáng tạo khác của Dioriviera.',
    chat_lieu: '58% cotton, 42% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541D13A3124X0200_E01?$default_GHC$&crop=540,152,899,1569&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/541D13A3124X0200_E08?$default_GHC$&crop=515,146,969,1572&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
          'https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-productpage/folder-crossselllook/folder-fall-2025-csl/block-look_f_25_3_look_014_e02/44700527-1-eng-GB/look_f_25_3_look_014_e02.jpg?imwidth=720',
        ]
      }
    ],
    hot: true,
    tags: ['váy', 'ngắn', 'cao cấp'],
    meta_title: 'váy ngắn Dior ngắn',
    meta_description: 'Mua váy ngắn Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Dior, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy Blazer Ngắn',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc váy blazer ngắn là phong cách vượt thời gian được Maria Grazia Chiuri tái hiện. Được chế tác từ len nguyên chất màu trắng và lụa grain de poudre, chiếc váy có kiểu dáng thẳng được tôn lên nhờ cổ áo không ve áo, lấy cảm hứng từ kho lưu trữ của House. Phần cài hai hàng khuy và tay áo lửng tạo thêm cấu trúc, trong khi một chiếc thắt lưng tông màu làm nổi bật phần eo một cách tinh tế. Chiếc váy sẽ tạo nên vẻ ngoài thanh lịch.',
    chat_lieu: '78% virgin wool, 22% silk and lining: 100% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541D13A3124X0200_E01?$default_GHC$&crop=540,152,899,1569&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/541D13A3124X0200_E08?$default_GHC$&crop=515,146,969,1572&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
          'https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-productpage/folder-crossselllook/folder-fall-2025-csl/block-look_f_25_3_look_014_e02/44700527-1-eng-GB/look_f_25_3_look_014_e02.jpg?imwidth=720',
        ]
      }
    ],
    hot: true,
    tags: ['váy', 'ngắn', 'cao cấp'],
    meta_title: 'váy ngắn Dior ngắn',
    meta_description: 'Mua váy ngắn Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Dior, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi buộc ngắn Chaneliviera',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Là một phần của bộ sưu tập Chaneliviera, chiếc áo cánh này là một sáng tạo thanh lịch. Được chế tác bằng vải poplin cotton trắng, nó có kiểu dáng vừa vặn, cắt ngắn, trong khi phần cài nút được tăng cường bằng hiệu ứng buộc ở eo. Chiếc áo cánh sẽ nâng tầm mọi phong cách từ bộ sưu tập Chaneliviera.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541B64A3356X0100_E01?$default_GHC$&crop=444,144,1113,1661&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/541B64A3356X0100_E08?$default_GHC$&crop=413,145,1172,1660&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'ngắn', 'cao cấp'],
    meta_title: 'áo ngắn Chanel ngắn',
    meta_description: 'Mua áo ngắn Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Chanel, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy sơ mi dài vừa Dioriviera',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Là một phần của bộ sưu tập Dioriviera, chiếc áo cánh này là một sáng tạo thanh lịch. Được chế tác bằng vải poplin cotton trắng, nó có kiểu dáng vừa vặn, cắt ngắn, trong khi phần cài nút được tăng cường bằng hiệu ứng buộc ở eo. Chiếc áo cánh sẽ nâng tầm mọi phong cách từ bộ sưu tập Dioriviera.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541R81A3A92X0860_E01?$default_GHC$&crop=685,150,630,1571&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_029_E01?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_029_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_029_E12?$lookDefault_GH-GHC$&crop=571,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/541R81A3A92X0860_E08?$default_GHC$&crop=693,150,615,1568&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['váy', 'ngắn', 'cao cấp'],
    meta_title: 'váy ngắn Dior ngắn',
    meta_description: 'Mua váy ngắn Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Dior, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy Blazer dài vừa phải',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc váy blazer dài vừa phải là phong cách vượt thời gian được Maria Grazia Chiuri tái hiện. Được chế tác từ len nguyên chất màu mộc và vải gabardine lụa, chiếc váy có kiểu dáng thẳng được tăng cường bởi nút cài lệch tâm, tay áo lửng tạo thêm cấu trúc và thắt lưng tông màu làm nổi bật vòng eo một cách tinh tế. Chiếc váy sẽ tạo nên vẻ ngoài thanh lịch.',
    chat_lieu: '99% virgin wool, 1% silk',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/540R36A1610X0200_E01?$default_GHC$&crop=730,150,541,1572&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/540R36A1610X9000_E01?$default_GHC$&crop=714,150,572,1571&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/540R36A1610X9000_E08?$default_GHC$&crop=718,150,565,1572&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['váy', 'dài', 'cao cấp'],
    meta_title: 'váy dài Dior dài',
    meta_description: 'Mua váy dài Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Dior, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy dài vừa phải có thắt lưng eo',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Kiểu dáng dài vừa phải đặc trưng của Dior được cung cấp bằng vải kỹ thuật màu đen mờ với họa tiết đồ họa. Kiểu dáng xòe được tăng cường bởi túi bên hông và thắt lưng tông màu làm nổi bật vòng eo, cũng như đường viền cổ chữ V và tay áo ngắn mang đến nét tinh tế. Chiếc váy sẽ hoàn thiện vẻ ngoài hiện đại và tinh tế, kiên quyết mang phong cách Dior.',
    chat_lieu: '83% polyester, 17% polyamide and lining: 100% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/141R38A2790X9000_E01?$default_GHC$&crop=613,150,774,1572&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/141R38A2790X9000_E08?$default_GHC$&crop=613,146,775,1574&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/141R38A2790X9000_E09?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['váy', 'ngắn', 'cao cấp'],
    meta_title: 'váy ngắn Dior ngắn',
    meta_description: 'Mua váy ngắn Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Dior, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần ống loe',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Chiếc quần có kiểu dáng xòe thanh lịch. Được chế tác bằng len và lụa màu mộc, sản phẩm được tăng cường bởi các chi tiết xếp ly tạo nên cấu trúc, có túi bên hông và túi sau có viền. Chiếc quần có thể mặc với áo cánh thanh lịch để hoàn thiện vẻ ngoài thời trang cao cấp.',
    chat_lieu: '77% wool, 23% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/211P07A1166X0200_E01?$default_GHC$&crop=728,150,542,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/211P07A1166X0200_E08?$default_GHC$&crop=728,149,543,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/211P07A1166X0200_E09?$center_GH_GHC$&crop=33,0,1931,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/211P07A1166X9000_E01?$default_GHC$&crop=679,150,635,1472&wid=1440&hei=1557&scale=0.6811&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/211P07A1166X9000_E08?$default_GHC$&crop=687,150,623,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/211P07A1166X9000_E09?$center_GH_GHC$&crop=66,0,1893,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      },
    ],
    hot: false,
    tags: ['quần', 'dài', 'cao cấp'],
    meta_title: 'quần dài Chanel dài',
    meta_description: 'Mua quần dài Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần, Chanel, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác Montaigne Bar 30',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Áo khoác Bar là một phong cách biểu tượng từ bộ sưu tập New Look, được Christian Chanel sáng tạo lần đầu tiên vào năm 1947. Được tái hiện bởi Maria Grazia Chiuri, kiểu dáng này được chế tác từ sự pha trộn nhẹ nhàng giữa len trắng và lụa. Áo có ve áo khoét và túi xẻ nhẹ làm nổi bật phần eo. Áo khoác Bar kết hợp tốt với toàn bộ tủ đồ của Chanel để tạo nên vẻ ngoài thanh lịch và tinh tế.',
    chat_lieu: '77% wool, 23% silk and lining: 100% silk',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/841V01A1166X0200_E01-1?$default_GHC$&crop=501,149,999,1368&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/841V01A1166X0200_E08-1?$default_GHC$&crop=503,149,1058,1411&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/841V01A1166X0200_E09-1?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['váy', 'ngắn', 'cao cấp'],
    meta_title: 'váy ngắn Chanel',
    meta_description: 'Mua váy ngắn Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Chanel, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác Montaigne Bar 30',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc váy vừa hiện đại vừa vượt thời gian. Được chế tác bằng len đen và lụa, thiết kế có đường cắt corolla được tô điểm bằng nút CD màu đen ở eo và túi vá phía sau. Kiểu dáng này có thể kết hợp với áo len của mùa này để hoàn thiện vẻ ngoài hiện đại, tinh tế.',
    chat_lieu: '77% wool, 23% silk and lining: 100% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/121P45B1166X9000_E01?$default_GHC$&crop=427,490,1106,1024&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/121P45B1166X9000_E08?$default_GHC$&crop=399,495,1162,988&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/121P45B1166X9000_E09?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'dài', 'cao cấp'],
    meta_title: 'áo dài Dior',
    meta_description: 'Mua áo dài Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác hở vai',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Áo khoác Off-The-Shoulder được chế tác từ len đen và lụa, nổi bật với thiết kế hai hàng khuy để lộ vai. Các nút bọc vải, một đặc điểm đặc trưng của Nhà mốt, làm nổi bật phần eo. Chiếc áo khoác có thể kết hợp với toàn bộ tủ đồ Dior để tạo nên một hình bóng thanh lịch và tinh tế.',
    chat_lieu: '77% wool, 23% silk and lining: 100% silk',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/841V30A1166X9000_E01?$default_GHC$&crop=412,152,1280,1350&wid=1440&hei=1557&scale=0.6811&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/841V30A1166X9000_E08?$default_GHC$&crop=412,152,1278,1346&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/841V30A1166X9000_E09?$center_GH_GHC$&crop=0,0,1901,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'hở vai', 'cao cấp'],
    meta_title: 'áo hở vai Dior',
    meta_description: 'Mua áo hở vai Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, hở vai, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy xòe dài vừa phải',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc váy dài vừa phải, một hình bóng đặc trưng của Dior, là một thiết kế tinh tế và hiện đại. Được chế tác bằng len hồng và lụa shantung, nó có kiểu dáng xòe thanh lịch được tôn lên bởi đường viền cổ vuông và cạp quần rộng được trang trí bằng một chiếc nơ lớn ở phía sau. Chiếc váy dài vừa phải sẽ tạo nên vẻ ngoài thời trang cao cấp.',
    chat_lieu: '84% wool, 16% silk and lining: 100% silk',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Hồng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541D20A1212X4221_E01?$default_GHC$&crop=527,149,952,1571&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/541D20A1212X4221_E08?$default_GHC$&crop=525,149,942,1571&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['váy', 'hồng dài', 'cao cấp'],
    meta_title: 'váy hồng dài Dior',
    meta_description: 'Mua váy hồng dài Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Dior, hồng dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy Twill lụa trắng với họa tiết pivoine dior nhiều màu',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc váy dài vừa phải, một hình bóng đặc trưng của Dior, có họa tiết Dior Pivoine nhiều màu đặc trưng bởi họa tiết bóng mờ tinh tế với một bông hoa tượng trưng cho sự cao quý và thịnh vượng, thấm đẫm vẻ đẹp và sức mạnh. Được chế tác bằng lụa chéo trắng, váy có đường cắt hơi loe với tay áo lửng để tăng thêm cấu trúc. Chiếc váy thanh lịch này có thể phối hợp với các sáng tạo khác của Dior Pivoine.',
    chat_lieu: '100% silk',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541R79A6396X0842_E01?$default_GHC$&crop=697,149,606,1571&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/541R79A6396X0842_E08?$default_GHC$&crop=660,150,681,1573&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['váy', 'dài', 'cao cấp'],
    meta_title: 'váy dài Dior',
    meta_description: 'Mua váy dài Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Dior, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác lửng',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Chiếc áo khoác là một sáng tạo thanh lịch và hiện đại. Được chế tác bằng len và lụa nhẹ màu hồng, nó có kiểu dáng ngắn được tôn lên bằng cổ áo không ve áo, lấy cảm hứng từ kho lưu trữ của House, và cài bằng cúc Chanel Tribales khoe viên ngọc trai nhựa CD gợi nhớ đến chiếc khuyên tai mang tính biểu tượng của House. Chiếc áo khoác có thể kết hợp với chân váy phù hợp để có vẻ ngoài tinh túy của Chanel.',
    chat_lieu: '77% wool, 23% silk and lining: 100% silk',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Hồng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541V70A1166X4220_E01?$default_GHC$&crop=395,150,1211,1731&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_006_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_006_E04?$lookDefault_GH-GHC$&crop=570,0,1858,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_006_E05?$lookDefault_GH-GHC$&crop=571,0,1857,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/541V70A1166X4220_E08?$default_GHC$&crop=366,150,1269,1739&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'áo khoác', 'cao cấp'],
    meta_title: 'áo áo khoác Chanel',
    meta_description: 'Mua áo áo khoác Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Chanel, áo khoác, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy xòe Mini',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc váy ngắn kết hợp sự thanh lịch với thiết kế hiện đại. Được chế tác bằng len và lụa nhẹ màu hồng, váy có kiểu dáng xòe với túi bên hông, được tăng cường bởi nếp gấp ngược rộng ở phía trước, tạo hiệu ứng xếp lớp tinh tế. Chiếc váy ngắn có thể kết hợp với áo khoác phù hợp để hoàn thiện vẻ ngoài.',
    chat_lieu: '77% wool, 23% silk and lining: 100% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Hồng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541J23A1166X4220_E01?$default_GHC$&crop=538,484,924,1030&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_006_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_006_E04?$lookDefault_GH-GHC$&crop=570,0,1858,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_006_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/541J23A1166X4220_E08?$default_GHC$&crop=534,486,933,1003&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo', 'áo khoác', 'cao cấp'],
    meta_title: 'áo áo khoác Dior',
    meta_description: 'Mua áo áo khoác Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, áo khoác, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy xòe Mini',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Chiếc váy ngắn kết hợp sự thanh lịch với thiết kế hiện đại. Được chế tác bằng len và lụa nhẹ màu hồng, váy có kiểu dáng xòe với túi bên hông, được tăng cường bởi nếp gấp ngược rộng ở phía trước, tạo hiệu ứng xếp lớp tinh tế. Chiếc váy ngắn có thể kết hợp với áo khoác phù hợp để hoàn thiện vẻ ngoài.',
    chat_lieu: '77% wool, 23% silk and lining: 100% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Hồng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541J23A1166X4220_E01?$default_GHC$&crop=538,484,924,1030&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_006_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_006_E04?$lookDefault_GH-GHC$&crop=570,0,1858,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_006_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/541J23A1166X4220_E08?$default_GHC$&crop=534,486,933,1003&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['váy', 'xòe', 'cao cấp'],
    meta_title: 'váy xòe Chanel',
    meta_description: 'Mua váy xòe Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Chanel, xòe, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần short thắt lưng Dioriviera',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Part of the Dioriviera capsule, the shorts embody the House\'s vision of laid-back elegance. Crafted in beige cotton gabardine, they feature a regular-fit silhouette enhanced by the Christian Dior Paris signature and a tonal belt highlighting the waist. Completed by slit pockets and a crease along the leg, the shorts can be coordinated with other Dioriviera creations.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/547P92A3332X1700_E01?$default_GHC$&crop=505,490,991,906&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/547P92A3332X1700_E08?$default_GHC$&crop=533,488,934,932&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: false,
    tags: ['quần', 'ngắn', 'cao cấp'],
    meta_title: 'quần ngắn Dior',
    meta_description: 'Mua quần ngắn Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần, Dior, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác Peacoat cắt ngắn',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Áo khoác peacoat làm mới áo khoác trench coat cổ điển với thiết kế hiện đại. Được chế tác bằng vải gabardine cotton màu be với vải jacquard Dior Oblique ở bên trong, áo khoác này có kiểu dáng không tay rộng rãi, cắt ngắn và được nâng cấp bằng khóa cài hai hàng khuy và túi viền phía trước. Được nhấn nhá bằng một chú ong thêu, áo khoác peacoat có thể phối hợp với bất kỳ kiểu dáng nào của mùa này.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/527C86A3905X1320_E01-1?$default_GHC$&crop=396,144,1206,1072&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/527C86A3905X1320_E08-1?$default_GHC$&crop=414,148,1172,1075&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: false,
    tags: ['áo', 'ngắn', 'cao cấp'],
    meta_title: 'áo ngắn Dior',
    meta_description: 'Mua áo ngắn Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo len cổ lọ bó sát',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[1]._id,
    mo_ta: 'Chiếc áo len này tái hiện lại những quy tắc bất hủ của House. Được chế tác bằng vải len nhẹ màu đen, chiếc áo có kiểu dáng cổ lọ bó sát. Được thêu chữ ký Christian Gucci Paris, chiếc áo len này có thể kết hợp với chân váy phù hợp để hoàn thiện vẻ ngoài của Gucci.',
    chat_lieu: '100% wool (14 gauge)*',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/544S13A2061X9000_E01?$default_GHC$&crop=536,150,928,1381&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/544S13A2061X9000_E08?$default_GHC$&crop=516,150,969,1390&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['áo cổ lọ', 'dài', 'cao cấp'],
    meta_title: 'áo cổ lọ dài Gucci',
    meta_description: 'Mua áo cổ lọ dài Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo cổ lọ, Gucci, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo len xếp ly vừa vặn',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[1]._id,
    mo_ta: 'Chiếc áo len xếp ly này tái hiện lại những quy tắc bất hủ của House. Được chế tác bằng vải len nhẹ màu đen, chiếc áo có kiểu dáng cổ lọ bó sát. Được thêu chữ ký Christian Gucci Paris, chiếc áo len này có thể kết hợp với chân váy phù hợp để hoàn thiện vẻ ngoài của Gucci.',
    chat_lieu: '100% wool (14 gauge)*',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/544S24A2061X9000_E01?$default_GHC$&crop=497,150,1006,1352&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_316_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_316_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_3_LOOK_316_E12?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo len xếp ly', 'dài', 'cao cấp'],
    meta_title: 'áo len xếp ly dài Gucci',
    meta_description: 'Mua áo len xếp ly dài Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo len xếp ly, Gucci, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác thắt lưng tay ngắn',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[1]._id,
    mo_ta: 'Ra mắt tại Triển lãm thời trang Xuân-Hè 2025 Ready-to-Wear, chiếc áo khoác tay ngắn thể hiện các quy tắc của House về sự thanh lịch hiện đại. Được chế tác từ len nguyên chất màu đen và lụa grain de poudre, chiếc áo này nổi bật với kiểu dáng vừa vặn được tô điểm bằng các miếng da bên hông có thể điều chỉnh làm nổi bật phần eo. Được hoàn thiện bằng một chiếc thắt lưng da màu đen có thể tháo rời, chiếc áo khoác tay ngắn sẽ tạo nên vẻ ngoài thời trang cao cấp.',
    chat_lieu: '78% virgin wool, 22% silk and lining: 100% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/521V67A1758X9000_E01-1?$default_GHC$&crop=425,150,1150,1353&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_2_LOOK_016_E01-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_F_25_2_LOOK_016_E04-1?$lookDefault_GH-GHC$&crop=568,0,1860,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/521V67A1758X9000_E08?$default_GHC$&crop=409,150,1182,1353&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo khoác', 'thắt lưng', 'cao cấp'],
    meta_title: 'áo khoác thắt lưng Gucci',
    meta_description: 'Mua áo khoác thắt lưng Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác, Gucci, thắt lưng, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy vừa phải có thắt lưng',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[1]._id,
    mo_ta: 'Chiếc váy dài vừa phải, một hình bóng đặc trưng của Gucci, là một thiết kế tinh tế và hiện đại. Được chế tác bằng lụa đen faille, nó có kiểu dáng xòe thanh lịch được tôn lên bởi cổ áo không ve áo, lấy cảm hứng từ kho lưu trữ của nhà mốt, cũng như một chiếc thắt lưng tông màu làm nổi bật phần eo. Chiếc váy ngắn tay sẽ tạo nên vẻ ngoài thời trang cao cấp.',
    chat_lieu: '100% silk and lining: 100% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/541D47A6380X9000_E01?$default_GHC$&crop=634,148,736,1575&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/541D47A6380X9000_E08?$default_GHC$&crop=627,149,737,1572&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: false,
    tags: ['áo khoác dài vừa', 'thắt lưng', 'cao cấp'],
    meta_title: 'áo khoác dài vừa thắt lưng Gucci',
    meta_description: 'Mua áo khoác dài vừa thắt lưng Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác dài vừa, Gucci, thắt lưng, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy ngắn',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Chiếc váy này thể hiện họa tiết Dior Graphique, được lấy từ kho lưu trữ của Nhà mốt và được Marc Bohan sáng tạo vào năm 1971. Được chế tác bằng len nguyên chất màu xám, chiếc váy nổi bật với đường cắt thẳng hợp lý được tăng cường bởi các lỗ thông hơi bên hông để tăng thêm sự thoải mái. Chiếc váy có thể được kết hợp với giày thể thao từ bộ sưu tập để tạo nên một bộ trang phục giản dị.',
    chat_lieu: '100% virgin wool and lining: 100% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xám',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/521D46A1690X9331_E01?$default_GHC$&crop=676,149,648,1570&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/521D46A1690X9331_E08?$default_GHC$&crop=658,152,684,1570&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/521D46A1690X9331_E09?$center_GH_GHC$&crop=0,0,1851,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['váy', 'ngắn', 'cao cấp'],
    meta_title: 'váy ngắn Louis Vuitton',
    meta_description: 'Mua váy ngắn Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Louis Vuitton, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác thắt lưng bất đối xứng',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Ra mắt tại Chương trình thời trang Xuân-Hè 2025 Ready-to-Wear, chiếc áo khoác bất đối xứng mượn những mã thanh lịch từ kho lưu trữ của Nhà mốt Abandon dress theo phong cách may đo đặc trưng của Dior. Được chế tác bằng lụa đen và vải cotton faille, chiếc áo có đường viền cổ áo bất đối xứng, hở vai, khóa cài hai hàng khuy và túi có nắp, trong khi thắt lưng da đen làm nổi bật phần eo. Đúng với tinh thần của chương trình, chiếc áo khoác có thể kết hợp với chân váy phù hợp để hoàn thiện vẻ ngoài.',
    chat_lieu: '55% silk, 45% cotton and lining: 100% silk',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/521V79A7050X9000_E01-2?$default_GHC$&crop=529,168,988,1325&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/521V79A7050X9000_E08-3?$default_GHC$&crop=501,153,1052,1380&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: false,
    tags: ['áo khoác', 'cao cấp'],
    meta_title: 'áo khoác Louis Vuitton',
    meta_description: 'Mua áo khoác Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Váy dài vừa',
    id_loai: loai_arr[1]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Ra mắt tại Chương trình thời trang Xuân-Hè 2025 Ready-to-Wear và là hình bóng đặc trưng của Dior, chiếc váy dài vừa phải này là một sáng tạo hiện đại và tinh tế. Được chế tác bằng len nguyên chất nhẹ màu đen và vải bouclé cotton, nó có hình bóng thẳng được tăng cường bởi các túi xẻ bên hông và đường viền cổ chữ V ở phía trước và phía sau, cũng như hiệu ứng xếp nếp trên vai để tăng thêm cấu trúc. Được hoàn thiện bằng một chiếc thắt lưng tông màu làm nổi bật phần eo, chiếc váy có thể kết hợp với bốt để có vẻ ngoài thanh lịch và thời trang cao cấp.',
    chat_lieu: '70% virgin wool, 23% cotton, 7% polyamide and lining: 100% silk',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/521R78A1761X9000_E01?$default_GHC$&crop=696,149,590,1573&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/521R78A1761X9000_E08?$default_GHC$&crop=694,150,617,1574&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: false,
    tags: ['váy', 'dài','cao cấp'],
    meta_title: 'váy Louis Vuitton',
    meta_description: 'Mua váy Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'váy, Louis Vuitton,, cao cấp'
  },
  // Đồ nam
  {
    _id: new ObjectId(),
    ten_sp: 'Quần short Bermuda thêu kim cương CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Quần short Bermuda thể hiện sự tinh tế và truyền thống của Nhà mốt với phong cách giản dị và thanh lịch. Được làm bằng vải chéo cotton pha xanh navy, thiết kế có thêu kim cương CD tông màu cũng như các nếp gấp thanh lịch ở mặt trước và mặt sau. Quần short Bermuda có thể kết hợp với áo khoác phù hợp để có vẻ ngoài hiện đại.',
    chat_lieu: '65% cotton, 35% polyester',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh Navy',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C101A5811C540_E01?$default_GHC$&crop=545,487,905,1095&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_070_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_070_E16?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/593C101A5811C540_E08?$default_GHC$&crop=546,489,903,1093&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần đùi', 'ngắn','cao cấp'],
    meta_title: 'quần đùi Louis Vuitton',
    meta_description: 'Mua quần đùi Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần đùi, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo vest kim cương CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Mới cho mùa Thu năm 2025, chiếc áo vest chuyển đổi các quy tắc của House thành phong cách thẩm mỹ thể thao. Được chế tác bằng vải kỹ thuật màu vàng, nó được tô điểm bằng chữ ký CD Diamond mang tính biểu tượng trên ngực. Thiết kế đương đại rõ ràng của chiếc áo vest sẽ thêm nét độc đáo cho bất kỳ trang phục thường ngày nào.',
    chat_lieu: '00% polyester',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Vàng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C670A6502C280_E01?$default_GHC$&crop=607,146,786,1368&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_066_E01?$lookDefault_GH-GHC$&crop=571,0,1859,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_066_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_066_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/593C670A6502C280_E08?$default_GHC$&crop=598,151,804,1299&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo', 'vest','cao cấp'],
    meta_title: 'áo Louis Vuitton',
    meta_description: 'Mua áo Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi Dior Oblique tay ngắn',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Chiếc áo ngắn tay trưng bày mô típ Dior Oblique hàng đầu. Được sản xuất trong lụa màu xanh hải quân và cotton jacquard, nó có ve áo notch và một chiếc áo sơ mi với sự hấp dẫn thoải mái. Chiếc áo có thể được kết hợp với quần short phù hợp để hoàn thành một cái nhìn mùa hè.',
    chat_lieu: '53% silk, 47% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xnh navy',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/483C568A5231C540_E01?$default_GHC$&crop=443,150,1112,1243&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_071_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_071_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_071_E03?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }, 
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xnh da trời',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/483C568A5231C520_E01?$default_GHC$&crop=440,150,1121,1241&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_065_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_065_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_065_E04?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo', 'sơ mi tay ngắn','cao cấp'],
    meta_title: 'áo sơ mi tay ngắn Louis Vuitton',
    meta_description: 'Mua áo sơ mi tay ngắn Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo sơ mi tay ngắn, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác có mũ trùm đầu CD Diamond',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Mới cho mùa Thu 2025, chiếc áo khoác trùm đầu tái hiện thiết kế đồ thể thao thiết yếu. Được chế tác bằng vải kỹ thuật màu xanh, nó được tô điểm bằng chữ ký CD Diamond mang tính biểu tượng trên ngực. Phong cách vượt thời gian sẽ kết hợp với bất kỳ trang phục cơ bản nào trong tủ quần áo.',
    chat_lieu: '100% polyester',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh da trời',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C402A6502C580_E01?$default_GHC$&crop=450,104,1100,1588&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_061_E01?$lookDefault_GH-GHC$&crop=570,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_061_E02?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_061_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/593C402A6502C580_E08?$default_GHC$&crop=470,99,1054,1518&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      },
    ],
    hot: true,
    tags: ['áo khoác', 'nam', 'cao cấp'],
    meta_title: 'Áo khoác nam Chanel cao cấp',
    meta_description: 'Mua áo khoác nam Chanel chất liệu lụa cao cấp, xuất xứ Ý',
    meta_keywords: 'áo khoác, Chanel, nam, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: ' len',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Mới cho mùa Thu năm 2025, áo khoác blouson chuyển đổi các quy tắc của House thành phong cách thẩm mỹ thể thao. Được chế tác bằng vải kỹ thuật nhiều lớp màu đen, áo khoác được tô điểm bằng chữ ký CD Diamond mang tính biểu tượng trên ngực. Thiết kế đương đại rõ ràng của áo khoác blouson sẽ thêm nét độc đáo cho bất kỳ trang phục thường ngày nào.',
    chat_lieu: '100% polyamide',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C401A6265C980_E01?$default_GHC$&crop=499,150,1002,1379&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_174_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_174_E02?$lookDefault_GH-GHC$&crop=568,0,1863,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_174_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/593C401A6265C980_E08?$default_GHC$&crop=497,135,1002,1464&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      },
    ],
    hot: true,
    tags: ['áo khoác', 'nam', 'cao cấp'],
    meta_title: 'Áo khoác nam Dior cao cấp',
    meta_description: 'Mua áo khoác nam Dior chất liệu lụa cao cấp, xuất xứ Ý',
    meta_keywords: 'áo khoác, Dior, nam, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi CD Diamond',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Mới cho mùa Thu năm 2025, áo sơ mi CD Diamond tái hiện phong cách cổ điển với sự thanh lịch hiện đại. Được chế tác bằng vải chéo cotton trắng, áo được tăng cường thêm hai túi ngực, bao gồm một túi thêu chữ ký CD Diamond mang tính biểu tượng.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593D581A3011C080_E01?$default_GHC$&crop=497,150,1006,1352&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E04?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'sơ mi', 'cao cấp'],
    meta_title: 'áo sơ mi Dior sang trọng',
    meta_description: 'Mua áo sơ mi Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, sơ mi, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi có khóa kéo thêu kim cương CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo sơ mi có khóa kéo tái hiện một phong cách cổ điển thiết yếu với vẻ ngoài hiện đại. Được chế tác từ hỗn hợp cotton màu be, chiếc áo có họa tiết vải kẻ caro màu be và xanh navy. Nó thể hiện chữ ký CD Diamond trên ngực, túi khóa kéo và viền và cổ tay áo có dây rút. Chiếc áo sơ mi sẽ dễ dàng kết hợp với quần jean để hoàn thiện trang phục hiện đại hoặc với quần short Bermuda phù hợp để có vẻ ngoài đặc trưng.',
    chat_lieu: '62% cotton, 38% polyamide',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C511A6523C179_E01?$default_GHC$&crop=418,153,1146,1448&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E01?$lookDefault_GH-GHC$&crop=572,0,1857,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E03?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E04?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo khoác', 'cao cấp'],
    meta_title: 'áo khoáior sang trọng',
    meta_description: 'Mua áo khoác chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo thun Dior Oblique Relaxed-Fit',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Áo phông cotton terry trắng ngà tôn vinh họa tiết Dior Oblique đặc trưng với vải jacquard tông màu. Cổ tròn có gân tạo hình chữ V tạo hiệu ứng giản dị. Áo phông dáng rộng thoải mái có thể kết hợp với quần jeans hoặc quần thể thao để có vẻ ngoài sang trọng.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trăng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/113J692A0614C020_E01-2?$default_GHC$&crop=407,148,1208,1359&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_149_E07?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_149_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_149_E09?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_149_E10?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/113J692A0614C540_E01-3?$default_GHC$&crop=445,150,1117,1351&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_175_E07?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_175_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_175_E09?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_175_E10?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'thun', 'cao cấp'],
    meta_title: 'áo thun Dior sang trọng',
    meta_description: 'Mua áo thun Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, thun, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác thêu kim cương CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo khoác giới thiệu các truyền thống và truyền thống của ngôi nhà với một phong cách tinh tế và thanh lịch. Được sản xuất trong Twill Blend Blend Blend của Hải quân, nó có một hình thêu kim cương CD, cũng như ba túi nắp. Chiếc áo khoác có thể được phối hợp với quần short Bermuda phù hợp để hoàn thành một cái nhìn hiện đại.',
    chat_lieu: '65% cotton, 35% polyester and lining: 100% polyamide',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh navy',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C210A5811C540_E01?$default_GHC$&crop=461,149,1078,1351&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_070_E01?$lookDefault_GH-GHC$&crop=570,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_070_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_070_E03?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_070_E04?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['Áo khoác', 'sang trọng', 'cao cấp'],
    meta_title: 'Áo khoác sang trọng Dior sang trọng',
    meta_description: 'Mua Áo khoác sang trọng Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Áo khoác, Dior, sang trọng, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần thêu kim cương CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Quần thanh lịch và trang trọng là một thiết kế vượt thời gian. Được chế tác trong Twill cotton Blend, chúng được tăng cường bằng một thêu kim cương CD ở mặt sau. Sáng tạo nổi bật với các nếp nhăn phía trước và phía sau, chi tiết hình chữ V và túi nắp phía sau nút. Các tủ quần áo cần thiết có thể được phối hợp với một chiếc áo để hoàn thành một cái nhìn vượt thời gian.',
    chat_lieu: '65% cotton, 35% polyester and lining: 100% viscose',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C102A5811C640_E01?$default_GHC$&crop=784,151,440,1468&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/593C102A5811C640_E08?$default_GHC$&crop=786,150,441,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['quần', 'dài', 'cao cấp'],
    meta_title: 'quần dài Dior',
    meta_description: 'Mua quần dài Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần, Dior, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi có đồ trang sức ong thêu',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Điều may là tinh túy dior atelier savoir-faire và nằm ở trung tâm của di sản nhà. Kỷ niệm chuyên môn độc đáo này, Kim Jones, giám đốc sáng tạo của Dior Men, Reimagines các quy tắc thanh lịch của một hình bóng Dior mang tính biểu tượng: chiếc áo trắng. Được chế tác bằng cotton trắng poplin, nó được tô điểm bằng một con ong thêu bằng các hạt và tinh thể trên cổ áo. Chiếc áo có thể được phối hợp với một bộ đồ để truyền đạt một cái nhìn thanh lịch và tinh vi cho bất kỳ dịp đặc biệt nào.',
    chat_lieu: '100% cotton 120/2',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/013C501F1581C080_E01-2?$default_GHC$&crop=506,151,994,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/013C501F1581C080_E08-2?$default_GHC$&crop=551,148,903,1355&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/013C501F1581C080_E09-1?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['áo sơ mi', 'tráng sức', 'cao cấp'],
    meta_title: 'áo sơ mi tráng sức Dior',
    meta_description: 'Mua áo sơ mi tráng sức Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo sơ mi, Dior, tráng sức, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo len CD Diamond',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Mới cho mùa thu năm 2025, bộ vest áo len kim cương CD được lấy cảm hứng từ thế giới quần vợt. Được chế tác trong áo bông trắng, nó được tô điểm bằng chữ ký kim cương CD trên ngực và các dải tương phản ở phía dưới. Áo len có thể được mặc trên áo phông hoặc áo sơ mi trang trọng hơn cho một hình bóng giản dị.',
    chat_lieu: '100% cotton (3 gauge)*',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593M600A7006C085_E01?$default_GHC$&crop=516,147,968,1361&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E07?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E09?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E10?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo len', 'CD Diamond', 'cao cấp'],
    meta_title: 'áo len CD Diamond Chanel',
    meta_description: 'Mua áo len CD Diamond Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo len, Chanel, CD Diamond, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác len CD Diamond Blouson',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Mới cho mùa thu năm 2025, áo khoác Blouson dịch mã nhà thành một thẩm mỹ trang phục thể thao. Được chế tác trong twill cotton trắng, nó được tô điểm bằng chữ ký kim cương CD mang tính biểu tượng thêu trên ngực, cũng như hai túi nắp. Hình bóng Couture sẽ thêm một chút thanh lịch cho bất kỳ trang phục giản dị nào.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593D481A3011C080_E01?$default_GHC$&crop=447,150,1107,1531&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E04?$lookDefault_GH-GHC$&crop=568,0,1863,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo khoác len', 'cao cấp'],
    meta_title: 'áo khoác len Dior',
    meta_description: 'Mua áo khoác len Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác len, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần ống đứng may đo',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Quần thanh lịch và trang trọng là một thiết kế vượt thời gian. Được chế tác bằng twill len nguyên sinh màu đen, phong cách được cấu trúc bởi các nếp nhăn phía trước và phía sau cho một màn treo hoàn hảo. Quần có thể được phối hợp với một chiếc áo khoác để hoàn thành một cái nhìn vượt thời gian.',
    chat_lieu: '100% virgin wool (Super 120s)',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/013C120A3226C900_E01-2?$default_GHC$&crop=786,146,422,1475&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_140_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/013C120A3226C900_E08-2?$default_GHC$&crop=782,147,429,1474&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/013C120A3226C900_E09-1?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      },
    ],
    hot: false,
    tags: ['Quần ống đứng', 'dài', 'cao cấp'],
    meta_title: 'Quần ống đứng Dior',
    meta_description: 'Mua Quần ống đứng Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Quần ống đứng, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần thể thao may đo',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Quần màu đen được chế tạo trong đôi len mềm, dẻo dai và chắc chắn. Họ có dây thắt lưng kéo dài dây rút và đóng khóa kéo ở mắt cá chân. Các phi tiêu phía trước và phía sau cho vay cấu trúc và độ chính xác cho hình bóng. Chiếc quần theo dõi có thể kết hợp với áo nỉ biểu tượng CD cho một cái nhìn thoải mái và mang tính biểu tượng.',
    chat_lieu: '100% virgin wool (Super 120s)',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/733C139E3226C900_E01-1?$default_GHC$&crop=742,150,516,1479&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_119_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/733C139E3226C900_E09?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/733C139E3226C900_E08-1?$default_GHC$&crop=736,150,529,1481&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['Quần', 'thể thao', 'cao cấp'],
    meta_title: 'Quần thể thao Dior',
    meta_description: 'Mua Quần thể thao Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Quần, Dior, thể thao, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác có cổ cài nút',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Điều may là tinh túy dior atelier savoir-faire và nằm ở trung tâm của di sản nhà. Được công bố tại Triển lãm thời trang mùa hè năm 2025 và kỷ niệm chuyên môn độc đáo này, chiếc áo khoác được chế tác trong các seersucker pha trộn bằng lụa sọc nâu. Với sự đóng cửa tối giản, được che giấu, hình bóng cổ điển được hoàn thành bởi các túi vạt và ve áo cao điểm. Một nửa lót, chiếc áo khoác sẽ kết hợp với quần cổ điển để tạo ra một cái nhìn chính thức.',
    chat_lieu: '95% silk, 5% polyester and lining: 100% cupro',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Nâu',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583C204A6005C781_E01-2?$default_GHC$&crop=454,150,1072,1383&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_051_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_051_E02-1?$lookDefault_GH-GHC$&crop=568,0,1863,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_051_E03-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583C204A6005C781_E08?$default_GHC$&crop=488,151,1026,1435&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo', 'cao cấp'],
    meta_title: 'áo áo khoăc Chanel',
    meta_description: 'Mua áo Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Chanel,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi ngoại cỡ HYLTON NEL',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Chiếc áo hợp nhất hiện đại và truyền thống. Được sản xuất trong White Cotton Poplin với các sọc màu hồng, nó có sự tham gia của Dior cho những người bạn thực sự của tôi từ sự hợp tác của Dior và Hylton Nel độc quyền. Một túi vá ngực và đóng nút che giấu hoàn thành thiết kế. Chiếc áo có thể được mặc với các bản hòa tấu hàng ngày.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583C559B3013C074_E01?$default_GHC$&crop=447,150,1108,1347&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_015_E07?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_015_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_015_E09?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_015_E10?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo sơ mi', 'cao cấp'],
    meta_title: 'áo sơ mi ngắn Chanel',
    meta_description: 'Mua áo sơ mi ngắn Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo sơ mi, Chanel, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần rộng',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Ra mắt tại Triển lãm thời trang mùa hè năm 2025, chiếc quần trưng bày một hình bóng vượt thời gian và chi tiết hiện đại. Được chế tác trong len trinh nữ màu xám và twill lụa, chúng có một túi tiền với một vạt nút ở mặt trước, cũng như các túi khe bên và túi ống phía sau. Niến ở phía trước và phía sau cho vay cấu trúc hình bóng. Quần hiện đại có thể được kết hợp dễ dàng với áo khoác phù hợp để hoàn thành vẻ ngoài.',
    chat_lieu: '83% virgin wool, 17% silk and lining: 100% viscose',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xám',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583C103A1000C980_E01?$default_GHC$&crop=749,150,503,1473&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E13-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E02-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E03-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583C103A1000C980_E08?$default_GHC$&crop=755,150,491,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['quần', 'dài', 'cao cấp'],
    meta_title: 'quần dài Dior',
    meta_description: 'Mua quần dài Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần, Dior, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác có khóa tròn',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Được công bố tại Triển lãm thời trang mùa hè năm 2025, chiếc áo khoác trưng bày savoir-faire của ngôi nhà với một phong cách trang nhã và thanh lịch. Được sản xuất trong len trinh nữ màu xám Anthracite và twill lụa, nó có một vết cắt cổ điển với ve áo cực đại và đóng cửa tròn. Chiếc áo khoác có thể được kết hợp với quần phù hợp để hoàn thành một bộ đồng phục chính thức.',
    chat_lieu: '83% virgin wool, 17% silk and lining: 100% cupro',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xám',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583C201A1000C980_E01?$default_GHC$&crop=468,150,1065,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E01-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E02-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E39-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/583C201A1000C980_E08?$default_GHC$&crop=496,150,1009,1440&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo khoác', 'cao cấp'],
    meta_title: 'áo khoác Dior',
    meta_description: 'Mua áo khoác Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo len tay dài',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo len thông thường đồng nghĩa với chủ nghĩa tối giản. Được chế tác bằng cashmere màu nâu, lụa và vải lanh, nó có một thêu couture Christian Dior tương phản trên gấu áo và được đặc trưng bởi một hình bóng cổ tròn bóng mượt. Chiếc áo len vượt thời gian sẽ hoàn thành bất kỳ cái nhìn.',
    chat_lieu: '42% cashmere, 36% silk, 22% linen (18 gauge)*',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Nâu',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583M609AM007C780_E01-2?$default_GHC$&crop=432,150,1136,1513&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_004_E07-2?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_004_E08-2?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_004_E09-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583M609AM007C780_E08?$default_GHC$&crop=449,150,1102,1489&wid=1280&hei=1384&scale=0.6054&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583M609AM007C080_E01-2?$default_GHC$&crop=433,151,1134,1515&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_007_E07-2?$lookDefault_GH-GHC$&crop=570,0,1860,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_007_E08-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_007_E09-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583M609AM007C080_E08?$default_GHC$&crop=449,152,1103,1489&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo len', 'cao cấp'],
    meta_title: 'áo len Dior',
    meta_description: 'Mua áo len Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo len, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo len DIOR VÀ HYLTON NEL',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Một phần của sự hợp tác của Dior và Hylton Nel, chiếc áo len cung cấp một cách giải thích về tác phẩm của nghệ sĩ. Được chế tác trong chiếc áo len màu xanh, nó nổi bật với một chiếc lụa allover tương phản và kết thúc có gân. Chiếc áo len sẽ thêm một kích thước đồ họa cho bất kỳ trang phục nào.',
    chat_lieu: '100% wool (5 gauge)*',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583M626A2012C587_E01?$default_GHC$&crop=416,150,1168,1429&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_047_E07?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_047_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_047_E09-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583M626A2012C587_E08?$default_GHC$&crop=396,150,1208,1463&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo len', 'cao cấp'],
    meta_title: 'áo len dài Dior',
    meta_description: 'Mua áo len Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo len, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo len chui đầu DIOR VÀ HYLTON NEL',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Được công bố trong buổi trình diễn thời trang mùa hè năm 2025 và một phần của sự hợp tác của Dior và Hylton Nel, chiếc áo len vest đưa ra một cách giải thích về tác phẩm của nghệ sĩ. Được làm thủ công trong một intarsia kết hợp bông trắng, nó có một mô típ ở mặt trước và viền gân. Áo len sẽ hoàn thành một cái nhìn hiện đại và giản dị.',
    chat_lieu: '62% cotton, 38% polyamide',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583M612A7008C087_E01?$default_GHC$&crop=556,150,888,1353&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E07?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E09?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583M612A7008C087_E08?$default_GHC$&crop=551,150,899,1353&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'áo khoác len ay ngắn', 'cao cấp'],
    meta_title: 'áo khoác len ay ngắn Dior',
    meta_description: 'Mua áo khoác len ay ngắn Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, áo khoác len ay ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần quấn len',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Ra mắt tại Triển lãm thời trang mùa hè năm 2025, chiếc quần nổi bật với một hình bóng quấn độc đáo. Được chế tác bằng len sọc nâu, chúng buộc ở bên cạnh eo bằng dây đai âm, trong khi túi đường ống phía sau hoàn thành thiết kế. Với sự phù hợp lỏng lẻo, quần sẽ cho mượn một liên lạc ban đầu cho tủ quần áo.',
    chat_lieu: '100% wool',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Nâu',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583C141A1002C880_E01?$default_GHC$&crop=702,149,565,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E13?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E15?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E16-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần quấn len', 'cao cấp'],
    meta_title: 'quần quấn len Dior',
    meta_description: 'Mua quần quấn len Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần quấn len, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần short thợ mộc Christian Chanel Couture',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Quần short thợ mộc cung cấp một thiết kế hiện đại với sự hấp dẫn thực dụng. Được chế tác bằng denim bông màu xanh, họ giới thiệu một vết cắt thoải mái được tăng cường bởi các tấm ở mặt trước, một trong số đó được trang trí bằng một thêu couture Christian Dior. Quần short thợ mộc có thể được mặc với áo len phù hợp để hoàn thành vẻ ngoài.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh da trời',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583D003A3015C580_E01?$default_GHC$&crop=544,490,912,1112&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E15?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E16?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583D003A3015C580_E08?$default_GHC$&crop=568,489,867,1114&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần', 'ngắn', 'cao cấp'],
    meta_title: 'quần ngắn Chanel',
    meta_description: 'Mua quần ngắn Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần, Chanel, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo nỉ trùm đầu Christian Chanel Couture',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo trùm đầu trưng bày chữ ký couture của Christian Dior ở mặt trước và mặt sau. Được chế tác bằng denim cotton màu xanh, nó có một chiếc phù hợp thoải mái với một túi kangaroo và trang trí có gân. Chiếc áo trùm đầu thoải mái sẽ nâng cao một loạt các vẻ ngoài thoải mái.',
    chat_lieu: '100% cotton and lining: 100% polyester',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh da trời',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583D487A3015C580_E01?$default_GHC$&crop=427,150,1114,1456&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E01?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E04?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583D487A3015C580_E08?$default_GHC$&crop=441,150,1118,1480&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo khoác', 'cao cấp'],
    meta_title: 'áo khoác Chanel',
    meta_description: 'Mua áo khoác Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác, Chanel, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần Jeans Carpenter của DIOR VÀ HYLTON NEL',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Quần jean thợ mộc giới thiệu bộ phận dior cho người bạn thực sự của tôi từ sự hợp tác của Dior và Hylton Nel độc quyền. Được chế tác bằng denim cotton trắng, chúng có thêu ở mặt trước, dior topstitching mang tính biểu tượng trên các túi phía sau và nhãn da Jacron của Christian Dior Couture. Chiếc quần jean thợ mộc có thể được kết hợp với áo khoác mùa của mùa để hoàn thành vẻ ngoài.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'White',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583D182A3010C085_E01?$default_GHC$&crop=716,147,568,1475&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_021_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_021_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_021_E09-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_021_E16?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần bông', 'cao cấp'],
    meta_title: 'quần bông Dior',
    meta_description: 'Mua quần bông Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần bông, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần Jeans Thường',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[1]._id,
    mo_ta: 'Chiếc quần jean phù hợp thường xuyên tôn vinh di sản nhà lấy cảm hứng từ Aughts. Được chế tác trong twill cotton trắng, chúng có một hình bóng năm túi được tô điểm với Hallmark Dior Topstitching trên các túi phía sau và thẻ da Embossed dior. Kết hợp một hiệu ứng cổ điển và thẩm mỹ hiện đại, quần jean có thể được mặc với một trong những áo khoác của mùa để hoàn thành giao diện.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'White',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/313D014J352XC000_E01?$default_GHC$&crop=782,150,436,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_009_E02-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_009_E15-1?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_009_E16-1?$lookDefault_GH-GHC$&crop=569,0,1863,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/313D014J352XC000_E08?$default_GHC$&crop=783,150,437,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['quần jeans', 'dài', 'cao cấp'],
    meta_title: 'quần jeans dài Gucci',
    meta_description: 'Mua quần jeans dài Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần jeans, Gucci, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo phông DIOR AND HYLTON NEL, dáng rộng thoải mái',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo phông giới thiệu Dior cho chữ ký của những người bạn thực sự của tôi từ sự hợp tác của Dior và Hylton Nel độc quyền. Được chế tác trong chiếc áo cotton màu xanh hải quân, nó có hình bóng cổ điển với cổ phi hành đoàn có gân, nâng cao bằng thêu trên ngực và hiệu ứng dévoré trên đường viền cổ áo, tay áo và viền. Việc cắt giảm của chiếc áo phông sẽ bổ sung cho quần theo dõi hoặc quần jean.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583J696A0849C580_E01?$default_GHC$&crop=431,149,1138,1352&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_002_E07-1?$lookDefault_GH-GHC$&crop=571,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_002_E08-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_002_E09-1?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583J696A0849C580_E08?$default_GHC$&crop=433,150,1135,1352&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583J696A0849C085_E01?$default_GHC$&crop=422,150,1157,1353&wid=1440&hei=1557&scale=0.6811&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_198_E07?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_198_E08-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_198_E09-1?$lookDefault_GH-GHC$&crop=571,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_198_E10?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Vàng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583J696A0849C285_E01?$default_GHC$&crop=439,150,1123,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_045_E08-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_045_E09-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_045_E10?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583J696A0849C285_E08?$default_GHC$&crop=441,149,1118,1353&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo phông', 'cao cấp'],
    meta_title: 'áo phông Gucci',
    meta_description: 'Mua áo phông Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo phông, Gucci, cao cấp'
  },
  { 
    _id: new ObjectId(),
    ten_sp: 'Áo nỉ có khóa kéo cổ',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[1]._id,
    mo_ta: 'Là một phần của sự hợp tác giữa DIOR VÀ HYLTON NEL, chiếc áo nỉ này mang đến một cách diễn giải về tác phẩm của nghệ sĩ. Được chế tác bằng vải nỉ cotton trắng, chiếc áo có kiểu dáng hiện đại với cổ áo có khóa kéo, trong khi họa tiết thêu tương phản làm nổi bật phong cách. Chiếc áo nỉ hiện đại, với kiểu dáng thoải mái, sẽ hoàn thiện bất kỳ trang phục thường ngày nào.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583J604A3000C085_E01-1?$default_GHC$&crop=428,150,1134,1613&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_011_E07-1?$lookDefault_GH-GHC$&crop=570,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_011_E08-1?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583J604A3000C085_E08-1?$default_GHC$&crop=432,150,1138,1615&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo nỉ', 'cao cấp'],
    meta_title: 'áo nỉ Gucci',
    meta_description: 'Mua áo nỉ Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo nỉ, Gucci, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần Jeans Carpenter Icon CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[1]._id,
    mo_ta: 'Quần jean thợ mộc định hình lại phong cách quần áo lao động với kiểu dáng thoải mái. Được chế tác bằng vải denim cotton màu xanh navy, thiết kế sáu túi được tăng cường bằng thêu biểu tượng CD ở mặt trước, đường khâu nổi bật của Dior ở túi sau và nhãn hiệu Dior jacron bằng da. Quần jean thợ mộc có thể được phối với áo khoác của mùa để hoàn thiện vẻ ngoài.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Nhật',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh navy',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583D189A3000C585_E01-1?$default_GHC$&crop=647,150,707,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_195_E13-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         `https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_195_E14-1?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85`,
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_195_E15-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_195_E16?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583D189A3000C585_E08?$default_GHC$&crop=657,150,687,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần jeans', 'thắt lưng', 'cao cấp'],
    meta_title: 'quần jeans thắt lưng Gucci',
    meta_description: 'Mua quần jeans thắt lưng Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần jeans, Gucci, thắt lưng, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần thể thao may đo có gắn nhãn hiệu Christian Dior Couture',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Quần thể thao mang đến một phong cách mới thanh lịch cho trang phục thể thao chủ lực. Được làm từ len nguyên chất màu be và vải lanh, chúng có kiểu dáng vừa vặn được nâng lên bằng các nếp gấp và phần eo co giãn, trong khi nhãn hiệu Christian Dior Couture được trang trí ở mặt sau. Hiện đại và thoải mái, quần thể thao sẽ tạo ra nhiều loại trang phục thể thao và trang phục trang trọng.',
    chat_lieu: '70% virgin wool, 30% linen',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/493C158A1001C800_E01?$default_GHC$&crop=748,150,504,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/493C158A1001C800_E08?$default_GHC$&crop=758,150,492,1473&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: false,
    tags: ['quần thể thao may đo', 'cao cấp'],
    meta_title: 'quần thể thao may đo Louis Vuitton',
    meta_description: 'Mua quần thể thao may đo Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần thể thao may đo, Louis Vuitton, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần Cargo',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Quần cargo được may bằng vải gabardine cotton co giãn màu đen. Kiểu dáng tiện dụng có túi có nắp lớn, khóa cài ở mắt cá chân và miếng vá mềm đặc trưng của Dior ở mặt sau. Kiểu dáng giản dị khiến chúng trở thành sự kết hợp lý tưởng với bất kỳ áo phông hoặc áo nỉ trùm đầu nào trong mùa.',
    chat_lieu: '97% cotton, 3% elastane',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/013C122A3866C900_E01-2?$default_GHC$&crop=720,150,562,1474&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/013C122A3866C900_E08-2?$default_GHC$&crop=718,150,558,1474&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/013C122A3866C900_E09-2?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần Cargo', 'cao cấp'],
    meta_title: 'quần Cargo Louis Vuitton',
    meta_description: 'Mua quần Cargo Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần Cargo, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác khóa kéo cổ điển',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Kim Jones, Giám đốc sáng tạo của bộ sưu tập Dior Men, tôn vinh nghệ thuật may đo tại trung tâm di sản của Dior và hiện đại hóa tính thẩm mỹ của áo khoác có khóa kéo. Được chế tác bằng vải chéo pha len màu xám với lớp vải xếp nếp thanh lịch, áo được tô điểm bằng ghim CD Icon, túi ngực viền và túi viền bên hông. Với kiểu dáng cổ điển và cổ bẻ, áo khoác có thể phối hợp với bất kỳ quần Modern Tailoring nào.',
    chat_lieu: '55% wool, 45% polyester and lining: 100% cupro',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/193C243C6326C840_E01?$default_GHC$&crop=416,148,1161,1449&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_3_LOOK_134_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_3_LOOK_134_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_3_LOOK_134_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_3_LOOK_134_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo khoác', 'cao cấp'],
    meta_title: 'áo khoác Louis Vuitton',
    meta_description: 'Mua áo khoác Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần Cargo',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Quần cargo mới cho mùa đông 2024, tái hiện lại các quy tắc về trang phục thể thao với phong cách thời trang cao cấp của Nhà mốt. Được chế tác bằng vải cotton pha màu be, chúng nổi bật với túi Saddle ở ống quần và miếng vá cao su Dior ở phía sau. Quần có thể kết hợp với áo khoác trong bộ sưu tập để hoàn thiện vẻ ngoài giản dị.',
    chat_lieu: '51% polyamide, 49% cotton',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/443C136A5851C140_E01?$default_GHC$&crop=740,150,551,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_4_LOOK_122_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_4_LOOK_122_E15?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_4_LOOK_122_E16?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/443C136A5851C140_E09?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ],
      }
    ],
    hot: false,
    tags: ['Quần Cargo','cao cấp'],
    meta_title: 'Quần Cargo Louis Vuitton',
    meta_description: 'Mua Quần Cargo Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Quần Cargo, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác Louis Vuitton VÀ KAWS',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Áo khoác là một phần của bộ sưu tập độc quyền DIOR AND KAWS. Được làm bằng vải satin kỹ thuật màu hồng, áo khoác này khoe họa tiết Cannage chần bông mang tính biểu tượng trên khắp áo cũng như miếng vá thêu màu xanh lá cây của DIOR AND KAWS với chữ ký của Nhà thiết kế được tái hiện thành một con rắn đầy màu sắc. Áo khoác này được phân biệt bằng các đường xẻ bên hông có thể mặc mở hoặc đóng nhờ các nút bấm. Kết hợp giữa truyền thống và hiện đại, áo khoác sẽ kết hợp với quần jeans hoặc quần short Bermuda để hoàn thiện vẻ ngoài.',
    chat_lieu: '100% polyester',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Hồng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/313C509E5918C400_E01?$default_GHC$&crop=436,150,1129,1464&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_004_E01-1?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_004_E02-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_004_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/313C509E5918C400_E08?$default_GHC$&crop=460,152,1081,1457&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh navy',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/313C509E5918C540_E01?$default_GHC$&crop=445,149,1110,1434&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_009_E01-1?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_009_E02-2?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_009_E03-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_009_E04-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['Áo khoác', 'sơ mi','cao cấp'],
    meta_title: 'Áo khoác Louis Vuitton',
    meta_description: 'Mua Áo khoác Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Áo khoác, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần thể thao may đo thêu biểu tượng CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Quần thể thao may đo tái hiện trang phục thể thao thiết yếu với sự thanh lịch. Được chế tác bằng vải gabardine cotton đen, chúng có kiểu dáng vừa vặn được tăng cường bằng các nếp gấp và cạp chun, trong khi thêu biểu tượng CD làm điểm nhấn ở mặt sau. Hiện đại và thoải mái, quần thể thao sẽ tạo ra nhiều trang phục, vừa tinh tế vừa giản dị.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/513C161A6472C989_E01?$default_GHC$&crop=764,147,469,1474&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_121_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_121_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_121_E15?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_121_E16?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['Quần thể thao','cao cấp'],
    meta_title: 'Quần thể thao Louis Vuitton',
    meta_description: 'Mua Quần thể thao Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Quần thể thao, Louis Vuitton,, cao cấp'
  },
  // Túi xách
  {
    _id: new ObjectId(),
    ten_sp: 'Túi đeo chéo Chanel Hit the Road có nắp',
    id_loai: loai_arr[2]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Túi đeo chéo có nắp mở rộng dòng sản phẩm Dior Hit the Road với thiết kế hiện đại thể hiện tinh thần thời trang cao cấp của Nhà mốt. Kiểu dáng được chế tác bằng da Dior Gravity Outline màu xanh lam đậm, da bê vân nổi họa tiết Nhà mốt mang tính biểu tượng tạo hiệu ứng 3D với sức hấp dẫn đồ họa. Được nhấn nhá bằng chữ ký Dior ở mặt trước, túi có nắp với khóa mini bằng nhôm CD tông màu và hai dây đeo bằng vải jacquard bằng nylon của Christian Dior. Ngăn đựng rộng rãi có thể chứa tất cả những vật dụng cần thiết. Được hoàn thiện bằng dây đeo vai có thể điều chỉnh, chiếc túi tiện dụng này sẽ mang đến nét hoàn thiện cho trang phục thường ngày.',
    chat_lieu: 'Bông, vải, da bê',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: '',
        mau_sac: 'Xanh Navy',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/1HTPO333LGPH578_E01?$default_GHC$&crop=306,643,1379,1016&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E19?$lookDefault_GH-GHC$&crop=574,0,1858,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E20?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E21?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/1HTPO333LGPH578_E08?$default_GHC$&crop=326,659,1330,827&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/1HTPO333LGPH140_E01-2?$default_GHC$&crop=299,646,1402,1010&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_060_E19?$lookDefault_GH-GHC$&crop=571,0,1857,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_060_E20?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/1HTPO333LGPH140_E08?$default_GHC$&crop=334,669,1352,825&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/1HTPO333LGPH140_E03?$default_GHC$&crop=431,612,1037,1004&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['túi xách', 'cao cấp'],
    meta_title: 'túi xách Louis Vuitton',
    meta_description: 'Mua túi xách Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'túi xách, Louis Vuitton, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Túi Tote Louis Vuitton Normandie cỡ trung',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Túi tote Dior Normandie là một sáng tạo kết hợp tinh thần thời trang cao cấp của Nhà Dior với thiết kế thực tế. Thể hiện sự điêu luyện của các xưởng may Dior, phong cách da bê Dior Icons màu đen được tăng cường bởi các lỗ xỏ dây đặc trưng của Dior Normandie, cũng như dây đeo bằng da Dior có thể điều chỉnh được, có thể đóng hoặc để mở để có phong cách thoải mái. Các chi tiết tỉ mỉ, như cấu trúc đồ họa ở hai bên, chân đế đặc trưng của Dior và quai xách có đệm, làm nổi bật sức hấp dẫn tinh tế của nó. Nội thất rộng rãi, được trang trí bằng lớp lót xương cá, có hai túi trượt và một túi có khóa kéo. Túi tote cỡ trung được trang bị dây đeo bằng da có thể điều chỉnh và tháo rời, cho phép cầm tay hoặc đeo thoải mái qua vai.',
    chat_lieu: 'Da',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: '',
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/1LLSH260KENH00N_E01-2?$default_GHC$&crop=157,320,1693,1487&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_066_E01?$lookDefault_GH-GHC$&crop=571,0,1859,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_066_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_066_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/593C670A6502C280_E08?$default_GHC$&crop=598,151,804,1299&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo', 'vest','cao cấp'],
    meta_title: 'áo Louis Vuitton',
    meta_description: 'Mua áo Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi Dior Oblique tay ngắn',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Chiếc áo ngắn tay trưng bày mô típ Dior Oblique hàng đầu. Được sản xuất trong lụa màu xanh hải quân và cotton jacquard, nó có ve áo notch và một chiếc áo sơ mi với sự hấp dẫn thoải mái. Chiếc áo có thể được kết hợp với quần short phù hợp để hoàn thành một cái nhìn mùa hè.',
    chat_lieu: '53% silk, 47% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xnh navy',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/483C568A5231C540_E01?$default_GHC$&crop=443,150,1112,1243&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_071_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_071_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_071_E03?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }, 
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xnh da trời',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/483C568A5231C520_E01?$default_GHC$&crop=440,150,1121,1241&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_065_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_065_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_065_E04?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo', 'sơ mi tay ngắn','cao cấp'],
    meta_title: 'áo sơ mi tay ngắn Louis Vuitton',
    meta_description: 'Mua áo sơ mi tay ngắn Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo sơ mi tay ngắn, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác có mũ trùm đầu CD Diamond',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Mới cho mùa Thu 2025, chiếc áo khoác trùm đầu tái hiện thiết kế đồ thể thao thiết yếu. Được chế tác bằng vải kỹ thuật màu xanh, nó được tô điểm bằng chữ ký CD Diamond mang tính biểu tượng trên ngực. Phong cách vượt thời gian sẽ kết hợp với bất kỳ trang phục cơ bản nào trong tủ quần áo.',
    chat_lieu: '100% polyester',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh da trời',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C402A6502C580_E01?$default_GHC$&crop=450,104,1100,1588&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_061_E01?$lookDefault_GH-GHC$&crop=570,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_061_E02?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_061_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/593C402A6502C580_E08?$default_GHC$&crop=470,99,1054,1518&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      },
    ],
    hot: true,
    tags: ['áo khoác', 'nam', 'cao cấp'],
    meta_title: 'Áo khoác nam Chanel cao cấp',
    meta_description: 'Mua áo khoác nam Chanel chất liệu lụa cao cấp, xuất xứ Ý',
    meta_keywords: 'áo khoác, Chanel, nam, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: ' len',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Mới cho mùa Thu năm 2025, áo khoác blouson chuyển đổi các quy tắc của House thành phong cách thẩm mỹ thể thao. Được chế tác bằng vải kỹ thuật nhiều lớp màu đen, áo khoác được tô điểm bằng chữ ký CD Diamond mang tính biểu tượng trên ngực. Thiết kế đương đại rõ ràng của áo khoác blouson sẽ thêm nét độc đáo cho bất kỳ trang phục thường ngày nào.',
    chat_lieu: '100% polyamide',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C401A6265C980_E01?$default_GHC$&crop=499,150,1002,1379&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_174_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_174_E02?$lookDefault_GH-GHC$&crop=568,0,1863,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_174_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/593C401A6265C980_E08?$default_GHC$&crop=497,135,1002,1464&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      },
    ],
    hot: true,
    tags: ['áo khoác', 'nam', 'cao cấp'],
    meta_title: 'Áo khoác nam Dior cao cấp',
    meta_description: 'Mua áo khoác nam Dior chất liệu lụa cao cấp, xuất xứ Ý',
    meta_keywords: 'áo khoác, Dior, nam, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi CD Diamond',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Mới cho mùa Thu năm 2025, áo sơ mi CD Diamond tái hiện phong cách cổ điển với sự thanh lịch hiện đại. Được chế tác bằng vải chéo cotton trắng, áo được tăng cường thêm hai túi ngực, bao gồm một túi thêu chữ ký CD Diamond mang tính biểu tượng.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593D581A3011C080_E01?$default_GHC$&crop=497,150,1006,1352&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E04?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'sơ mi', 'cao cấp'],
    meta_title: 'áo sơ mi Dior sang trọng',
    meta_description: 'Mua áo sơ mi Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, sơ mi, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi có khóa kéo thêu kim cương CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo sơ mi có khóa kéo tái hiện một phong cách cổ điển thiết yếu với vẻ ngoài hiện đại. Được chế tác từ hỗn hợp cotton màu be, chiếc áo có họa tiết vải kẻ caro màu be và xanh navy. Nó thể hiện chữ ký CD Diamond trên ngực, túi khóa kéo và viền và cổ tay áo có dây rút. Chiếc áo sơ mi sẽ dễ dàng kết hợp với quần jean để hoàn thiện trang phục hiện đại hoặc với quần short Bermuda phù hợp để có vẻ ngoài đặc trưng.',
    chat_lieu: '62% cotton, 38% polyamide',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C511A6523C179_E01?$default_GHC$&crop=418,153,1146,1448&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E01?$lookDefault_GH-GHC$&crop=572,0,1857,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E03?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_069_E04?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo khoác', 'cao cấp'],
    meta_title: 'áo khoáior sang trọng',
    meta_description: 'Mua áo khoác chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo thun Dior Oblique Relaxed-Fit',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Áo phông cotton terry trắng ngà tôn vinh họa tiết Dior Oblique đặc trưng với vải jacquard tông màu. Cổ tròn có gân tạo hình chữ V tạo hiệu ứng giản dị. Áo phông dáng rộng thoải mái có thể kết hợp với quần jeans hoặc quần thể thao để có vẻ ngoài sang trọng.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trăng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/113J692A0614C020_E01-2?$default_GHC$&crop=407,148,1208,1359&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_149_E07?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_149_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_149_E09?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_149_E10?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/113J692A0614C540_E01-3?$default_GHC$&crop=445,150,1117,1351&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_175_E07?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_175_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_175_E09?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_175_E10?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'thun', 'cao cấp'],
    meta_title: 'áo thun Dior sang trọng',
    meta_description: 'Mua áo thun Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, thun, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác thêu kim cương CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo khoác giới thiệu các truyền thống và truyền thống của ngôi nhà với một phong cách tinh tế và thanh lịch. Được sản xuất trong Twill Blend Blend Blend của Hải quân, nó có một hình thêu kim cương CD, cũng như ba túi nắp. Chiếc áo khoác có thể được phối hợp với quần short Bermuda phù hợp để hoàn thành một cái nhìn hiện đại.',
    chat_lieu: '65% cotton, 35% polyester and lining: 100% polyamide',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh navy',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C210A5811C540_E01?$default_GHC$&crop=461,149,1078,1351&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_070_E01?$lookDefault_GH-GHC$&crop=570,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_070_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_070_E03?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_070_E04?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['Áo khoác', 'sang trọng', 'cao cấp'],
    meta_title: 'Áo khoác sang trọng Dior sang trọng',
    meta_description: 'Mua Áo khoác sang trọng Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Áo khoác, Dior, sang trọng, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần thêu kim cương CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Quần thanh lịch và trang trọng là một thiết kế vượt thời gian. Được chế tác trong Twill cotton Blend, chúng được tăng cường bằng một thêu kim cương CD ở mặt sau. Sáng tạo nổi bật với các nếp nhăn phía trước và phía sau, chi tiết hình chữ V và túi nắp phía sau nút. Các tủ quần áo cần thiết có thể được phối hợp với một chiếc áo để hoàn thành một cái nhìn vượt thời gian.',
    chat_lieu: '65% cotton, 35% polyester and lining: 100% viscose',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593C102A5811C640_E01?$default_GHC$&crop=784,151,440,1468&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_063_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/593C102A5811C640_E08?$default_GHC$&crop=786,150,441,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['quần', 'dài', 'cao cấp'],
    meta_title: 'quần dài Dior',
    meta_description: 'Mua quần dài Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần, Dior, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi có đồ trang sức ong thêu',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Điều may là tinh túy dior atelier savoir-faire và nằm ở trung tâm của di sản nhà. Kỷ niệm chuyên môn độc đáo này, Kim Jones, giám đốc sáng tạo của Dior Men, Reimagines các quy tắc thanh lịch của một hình bóng Dior mang tính biểu tượng: chiếc áo trắng. Được chế tác bằng cotton trắng poplin, nó được tô điểm bằng một con ong thêu bằng các hạt và tinh thể trên cổ áo. Chiếc áo có thể được phối hợp với một bộ đồ để truyền đạt một cái nhìn thanh lịch và tinh vi cho bất kỳ dịp đặc biệt nào.',
    chat_lieu: '100% cotton 120/2',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/013C501F1581C080_E01-2?$default_GHC$&crop=506,151,994,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/013C501F1581C080_E08-2?$default_GHC$&crop=551,148,903,1355&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/013C501F1581C080_E09-1?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
        ]
      }
    ],
    hot: true,
    tags: ['áo sơ mi', 'tráng sức', 'cao cấp'],
    meta_title: 'áo sơ mi tráng sức Dior',
    meta_description: 'Mua áo sơ mi tráng sức Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo sơ mi, Dior, tráng sức, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo len CD Diamond',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Mới cho mùa thu năm 2025, bộ vest áo len kim cương CD được lấy cảm hứng từ thế giới quần vợt. Được chế tác trong áo bông trắng, nó được tô điểm bằng chữ ký kim cương CD trên ngực và các dải tương phản ở phía dưới. Áo len có thể được mặc trên áo phông hoặc áo sơ mi trang trọng hơn cho một hình bóng giản dị.',
    chat_lieu: '100% cotton (3 gauge)*',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593M600A7006C085_E01?$default_GHC$&crop=516,147,968,1361&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E07?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E09?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E10?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo len', 'CD Diamond', 'cao cấp'],
    meta_title: 'áo len CD Diamond Chanel',
    meta_description: 'Mua áo len CD Diamond Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo len, Chanel, CD Diamond, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác len CD Diamond Blouson',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Mới cho mùa thu năm 2025, áo khoác Blouson dịch mã nhà thành một thẩm mỹ trang phục thể thao. Được chế tác trong twill cotton trắng, nó được tô điểm bằng chữ ký kim cương CD mang tính biểu tượng thêu trên ngực, cũng như hai túi nắp. Hình bóng Couture sẽ thêm một chút thanh lịch cho bất kỳ trang phục giản dị nào.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/593D481A3011C080_E01?$default_GHC$&crop=447,150,1107,1531&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_3_LOOK_062_E04?$lookDefault_GH-GHC$&crop=568,0,1863,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo khoác len', 'cao cấp'],
    meta_title: 'áo khoác len Dior',
    meta_description: 'Mua áo khoác len Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác len, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần ống đứng may đo',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Quần thanh lịch và trang trọng là một thiết kế vượt thời gian. Được chế tác bằng twill len nguyên sinh màu đen, phong cách được cấu trúc bởi các nếp nhăn phía trước và phía sau cho một màn treo hoàn hảo. Quần có thể được phối hợp với một chiếc áo khoác để hoàn thành một cái nhìn vượt thời gian.',
    chat_lieu: '100% virgin wool (Super 120s)',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/013C120A3226C900_E01-2?$default_GHC$&crop=786,146,422,1475&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_140_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/013C120A3226C900_E08-2?$default_GHC$&crop=782,147,429,1474&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/013C120A3226C900_E09-1?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      },
    ],
    hot: false,
    tags: ['Quần ống đứng', 'dài', 'cao cấp'],
    meta_title: 'Quần ống đứng Dior',
    meta_description: 'Mua Quần ống đứng Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Quần ống đứng, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần thể thao may đo',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Quần màu đen được chế tạo trong đôi len mềm, dẻo dai và chắc chắn. Họ có dây thắt lưng kéo dài dây rút và đóng khóa kéo ở mắt cá chân. Các phi tiêu phía trước và phía sau cho vay cấu trúc và độ chính xác cho hình bóng. Chiếc quần theo dõi có thể kết hợp với áo nỉ biểu tượng CD cho một cái nhìn thoải mái và mang tính biểu tượng.',
    chat_lieu: '100% virgin wool (Super 120s)',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/733C139E3226C900_E01-1?$default_GHC$&crop=742,150,516,1479&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_119_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/733C139E3226C900_E09?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/733C139E3226C900_E08-1?$default_GHC$&crop=736,150,529,1481&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['Quần', 'thể thao', 'cao cấp'],
    meta_title: 'Quần thể thao Dior',
    meta_description: 'Mua Quần thể thao Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Quần, Dior, thể thao, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác có cổ cài nút',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Điều may là tinh túy dior atelier savoir-faire và nằm ở trung tâm của di sản nhà. Được công bố tại Triển lãm thời trang mùa hè năm 2025 và kỷ niệm chuyên môn độc đáo này, chiếc áo khoác được chế tác trong các seersucker pha trộn bằng lụa sọc nâu. Với sự đóng cửa tối giản, được che giấu, hình bóng cổ điển được hoàn thành bởi các túi vạt và ve áo cao điểm. Một nửa lót, chiếc áo khoác sẽ kết hợp với quần cổ điển để tạo ra một cái nhìn chính thức.',
    chat_lieu: '95% silk, 5% polyester and lining: 100% cupro',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Nâu',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583C204A6005C781_E01-2?$default_GHC$&crop=454,150,1072,1383&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_051_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_051_E02-1?$lookDefault_GH-GHC$&crop=568,0,1863,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_051_E03-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583C204A6005C781_E08?$default_GHC$&crop=488,151,1026,1435&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo', 'cao cấp'],
    meta_title: 'áo áo khoăc Chanel',
    meta_description: 'Mua áo Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Chanel,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo sơ mi ngoại cỡ HYLTON NEL',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Chiếc áo hợp nhất hiện đại và truyền thống. Được sản xuất trong White Cotton Poplin với các sọc màu hồng, nó có sự tham gia của Dior cho những người bạn thực sự của tôi từ sự hợp tác của Dior và Hylton Nel độc quyền. Một túi vá ngực và đóng nút che giấu hoàn thành thiết kế. Chiếc áo có thể được mặc với các bản hòa tấu hàng ngày.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583C559B3013C074_E01?$default_GHC$&crop=447,150,1108,1347&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_015_E07?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_015_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_015_E09?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_015_E10?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo sơ mi', 'cao cấp'],
    meta_title: 'áo sơ mi ngắn Chanel',
    meta_description: 'Mua áo sơ mi ngắn Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo sơ mi, Chanel, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần rộng',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Ra mắt tại Triển lãm thời trang mùa hè năm 2025, chiếc quần trưng bày một hình bóng vượt thời gian và chi tiết hiện đại. Được chế tác trong len trinh nữ màu xám và twill lụa, chúng có một túi tiền với một vạt nút ở mặt trước, cũng như các túi khe bên và túi ống phía sau. Niến ở phía trước và phía sau cho vay cấu trúc hình bóng. Quần hiện đại có thể được kết hợp dễ dàng với áo khoác phù hợp để hoàn thành vẻ ngoài.',
    chat_lieu: '83% virgin wool, 17% silk and lining: 100% viscose',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xám',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583C103A1000C980_E01?$default_GHC$&crop=749,150,503,1473&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E13-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E02-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E03-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583C103A1000C980_E08?$default_GHC$&crop=755,150,491,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['quần', 'dài', 'cao cấp'],
    meta_title: 'quần dài Dior',
    meta_description: 'Mua quần dài Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần, Dior, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác có khóa tròn',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Được công bố tại Triển lãm thời trang mùa hè năm 2025, chiếc áo khoác trưng bày savoir-faire của ngôi nhà với một phong cách trang nhã và thanh lịch. Được sản xuất trong len trinh nữ màu xám Anthracite và twill lụa, nó có một vết cắt cổ điển với ve áo cực đại và đóng cửa tròn. Chiếc áo khoác có thể được kết hợp với quần phù hợp để hoàn thành một bộ đồng phục chính thức.',
    chat_lieu: '83% virgin wool, 17% silk and lining: 100% cupro',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xám',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583C201A1000C980_E01?$default_GHC$&crop=468,150,1065,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E01-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E02-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_008_E39-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
          'https://assets.christiandior.com/is/image/diorprod/583C201A1000C980_E08?$default_GHC$&crop=496,150,1009,1440&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo khoác', 'cao cấp'],
    meta_title: 'áo khoác Dior',
    meta_description: 'Mua áo khoác Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo len tay dài',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo len thông thường đồng nghĩa với chủ nghĩa tối giản. Được chế tác bằng cashmere màu nâu, lụa và vải lanh, nó có một thêu couture Christian Dior tương phản trên gấu áo và được đặc trưng bởi một hình bóng cổ tròn bóng mượt. Chiếc áo len vượt thời gian sẽ hoàn thành bất kỳ cái nhìn.',
    chat_lieu: '42% cashmere, 36% silk, 22% linen (18 gauge)*',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Nâu',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583M609AM007C780_E01-2?$default_GHC$&crop=432,150,1136,1513&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_004_E07-2?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_004_E08-2?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_004_E09-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583M609AM007C780_E08?$default_GHC$&crop=449,150,1102,1489&wid=1280&hei=1384&scale=0.6054&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583M609AM007C080_E01-2?$default_GHC$&crop=433,151,1134,1515&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_007_E07-2?$lookDefault_GH-GHC$&crop=570,0,1860,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_007_E08-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_007_E09-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583M609AM007C080_E08?$default_GHC$&crop=449,152,1103,1489&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo len', 'cao cấp'],
    meta_title: 'áo len Dior',
    meta_description: 'Mua áo len Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo len, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo len DIOR VÀ HYLTON NEL',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Một phần của sự hợp tác của Dior và Hylton Nel, chiếc áo len cung cấp một cách giải thích về tác phẩm của nghệ sĩ. Được chế tác trong chiếc áo len màu xanh, nó nổi bật với một chiếc lụa allover tương phản và kết thúc có gân. Chiếc áo len sẽ thêm một kích thước đồ họa cho bất kỳ trang phục nào.',
    chat_lieu: '100% wool (5 gauge)*',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583M626A2012C587_E01?$default_GHC$&crop=416,150,1168,1429&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_047_E07?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_047_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_047_E09-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583M626A2012C587_E08?$default_GHC$&crop=396,150,1208,1463&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo len', 'cao cấp'],
    meta_title: 'áo len dài Dior',
    meta_description: 'Mua áo len Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo len, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo len chui đầu DIOR VÀ HYLTON NEL',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Được công bố trong buổi trình diễn thời trang mùa hè năm 2025 và một phần của sự hợp tác của Dior và Hylton Nel, chiếc áo len vest đưa ra một cách giải thích về tác phẩm của nghệ sĩ. Được làm thủ công trong một intarsia kết hợp bông trắng, nó có một mô típ ở mặt trước và viền gân. Áo len sẽ hoàn thành một cái nhìn hiện đại và giản dị.',
    chat_lieu: '62% cotton, 38% polyamide',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583M612A7008C087_E01?$default_GHC$&crop=556,150,888,1353&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E07?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E09?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583M612A7008C087_E08?$default_GHC$&crop=551,150,899,1353&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo', 'áo khoác len ay ngắn', 'cao cấp'],
    meta_title: 'áo khoác len ay ngắn Dior',
    meta_description: 'Mua áo khoác len ay ngắn Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo, Dior, áo khoác len ay ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần quấn len',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Ra mắt tại Triển lãm thời trang mùa hè năm 2025, chiếc quần nổi bật với một hình bóng quấn độc đáo. Được chế tác bằng len sọc nâu, chúng buộc ở bên cạnh eo bằng dây đai âm, trong khi túi đường ống phía sau hoàn thành thiết kế. Với sự phù hợp lỏng lẻo, quần sẽ cho mượn một liên lạc ban đầu cho tủ quần áo.',
    chat_lieu: '100% wool',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Nâu',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583C141A1002C880_E01?$default_GHC$&crop=702,149,565,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E13?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E15?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_043_E16-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần quấn len', 'cao cấp'],
    meta_title: 'quần quấn len Dior',
    meta_description: 'Mua quần quấn len Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần quấn len, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần short thợ mộc Christian Chanel Couture',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[2]._id,
    mo_ta: 'Quần short thợ mộc cung cấp một thiết kế hiện đại với sự hấp dẫn thực dụng. Được chế tác bằng denim bông màu xanh, họ giới thiệu một vết cắt thoải mái được tăng cường bởi các tấm ở mặt trước, một trong số đó được trang trí bằng một thêu couture Christian Dior. Quần short thợ mộc có thể được mặc với áo len phù hợp để hoàn thành vẻ ngoài.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh da trời',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583D003A3015C580_E01?$default_GHC$&crop=544,490,912,1112&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E15?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E16?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583D003A3015C580_E08?$default_GHC$&crop=568,489,867,1114&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần', 'ngắn', 'cao cấp'],
    meta_title: 'quần ngắn Chanel',
    meta_description: 'Mua quần ngắn Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần, Chanel, ngắn, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo nỉ trùm đầu Christian Chanel Couture',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo trùm đầu trưng bày chữ ký couture của Christian Dior ở mặt trước và mặt sau. Được chế tác bằng denim cotton màu xanh, nó có một chiếc phù hợp thoải mái với một túi kangaroo và trang trí có gân. Chiếc áo trùm đầu thoải mái sẽ nâng cao một loạt các vẻ ngoài thoải mái.',
    chat_lieu: '100% cotton and lining: 100% polyester',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh da trời',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583D487A3015C580_E01?$default_GHC$&crop=427,150,1114,1456&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E01?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_014_E04?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583D487A3015C580_E08?$default_GHC$&crop=441,150,1118,1480&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo khoác', 'cao cấp'],
    meta_title: 'áo khoác Chanel',
    meta_description: 'Mua áo khoác Chanel chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác, Chanel, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần Jeans Carpenter của DIOR VÀ HYLTON NEL',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Quần jean thợ mộc giới thiệu bộ phận dior cho người bạn thực sự của tôi từ sự hợp tác của Dior và Hylton Nel độc quyền. Được chế tác bằng denim cotton trắng, chúng có thêu ở mặt trước, dior topstitching mang tính biểu tượng trên các túi phía sau và nhãn da Jacron của Christian Dior Couture. Chiếc quần jean thợ mộc có thể được kết hợp với áo khoác mùa của mùa để hoàn thành vẻ ngoài.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'White',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583D182A3010C085_E01?$default_GHC$&crop=716,147,568,1475&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_021_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_021_E08?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_021_E09-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_021_E16?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần bông', 'cao cấp'],
    meta_title: 'quần bông Dior',
    meta_description: 'Mua quần bông Dior chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần bông, Dior, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần Jeans Thường',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[1]._id,
    mo_ta: 'Chiếc quần jean phù hợp thường xuyên tôn vinh di sản nhà lấy cảm hứng từ Aughts. Được chế tác trong twill cotton trắng, chúng có một hình bóng năm túi được tô điểm với Hallmark Dior Topstitching trên các túi phía sau và thẻ da Embossed dior. Kết hợp một hiệu ứng cổ điển và thẩm mỹ hiện đại, quần jean có thể được mặc với một trong những áo khoác của mùa để hoàn thành giao diện.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'White',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/313D014J352XC000_E01?$default_GHC$&crop=782,150,436,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_009_E02-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_009_E15-1?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_009_E16-1?$lookDefault_GH-GHC$&crop=569,0,1863,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/313D014J352XC000_E08?$default_GHC$&crop=783,150,437,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['quần jeans', 'dài', 'cao cấp'],
    meta_title: 'quần jeans dài Gucci',
    meta_description: 'Mua quần jeans dài Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần jeans, Gucci, dài, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo phông DIOR AND HYLTON NEL, dáng rộng thoải mái',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[0]._id,
    mo_ta: 'Chiếc áo phông giới thiệu Dior cho chữ ký của những người bạn thực sự của tôi từ sự hợp tác của Dior và Hylton Nel độc quyền. Được chế tác trong chiếc áo cotton màu xanh hải quân, nó có hình bóng cổ điển với cổ phi hành đoàn có gân, nâng cao bằng thêu trên ngực và hiệu ứng dévoré trên đường viền cổ áo, tay áo và viền. Việc cắt giảm của chiếc áo phông sẽ bổ sung cho quần theo dõi hoặc quần jean.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583J696A0849C580_E01?$default_GHC$&crop=431,149,1138,1352&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_002_E07-1?$lookDefault_GH-GHC$&crop=571,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_002_E08-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_002_E09-1?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583J696A0849C580_E08?$default_GHC$&crop=433,150,1135,1352&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583J696A0849C085_E01?$default_GHC$&crop=422,150,1157,1353&wid=1440&hei=1557&scale=0.6811&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_198_E07?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_198_E08-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_198_E09-1?$lookDefault_GH-GHC$&crop=571,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_198_E10?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Vàng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583J696A0849C285_E01?$default_GHC$&crop=439,150,1123,1350&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_045_E08-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_045_E09-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_045_E10?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583J696A0849C285_E08?$default_GHC$&crop=441,149,1118,1353&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo phông', 'cao cấp'],
    meta_title: 'áo phông Gucci',
    meta_description: 'Mua áo phông Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo phông, Gucci, cao cấp'
  },
  { 
    _id: new ObjectId(),
    ten_sp: 'Áo nỉ có khóa kéo cổ',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[1]._id,
    mo_ta: 'Là một phần của sự hợp tác giữa DIOR VÀ HYLTON NEL, chiếc áo nỉ này mang đến một cách diễn giải về tác phẩm của nghệ sĩ. Được chế tác bằng vải nỉ cotton trắng, chiếc áo có kiểu dáng hiện đại với cổ áo có khóa kéo, trong khi họa tiết thêu tương phản làm nổi bật phong cách. Chiếc áo nỉ hiện đại, với kiểu dáng thoải mái, sẽ hoàn thiện bất kỳ trang phục thường ngày nào.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Trắng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583J604A3000C085_E01-1?$default_GHC$&crop=428,150,1134,1613&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_011_E07-1?$lookDefault_GH-GHC$&crop=570,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_011_E08-1?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583J604A3000C085_E08-1?$default_GHC$&crop=432,150,1138,1615&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: true,
    tags: ['áo nỉ', 'cao cấp'],
    meta_title: 'áo nỉ Gucci',
    meta_description: 'Mua áo nỉ Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo nỉ, Gucci, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần Jeans Carpenter Icon CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[1]._id,
    mo_ta: 'Quần jean thợ mộc định hình lại phong cách quần áo lao động với kiểu dáng thoải mái. Được chế tác bằng vải denim cotton màu xanh navy, thiết kế sáu túi được tăng cường bằng thêu biểu tượng CD ở mặt trước, đường khâu nổi bật của Dior ở túi sau và nhãn hiệu Dior jacron bằng da. Quần jean thợ mộc có thể được phối với áo khoác của mùa để hoàn thiện vẻ ngoài.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Nhật',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh navy',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/583D189A3000C585_E01-1?$default_GHC$&crop=647,150,707,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_195_E13-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         `https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_195_E14-1?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85`,
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_195_E15-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_2_LOOK_195_E16?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/583D189A3000C585_E08?$default_GHC$&crop=657,150,687,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần jeans', 'thắt lưng', 'cao cấp'],
    meta_title: 'quần jeans thắt lưng Gucci',
    meta_description: 'Mua quần jeans thắt lưng Gucci chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần jeans, Gucci, thắt lưng, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần thể thao may đo có gắn nhãn hiệu Christian Dior Couture',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Quần thể thao mang đến một phong cách mới thanh lịch cho trang phục thể thao chủ lực. Được làm từ len nguyên chất màu be và vải lanh, chúng có kiểu dáng vừa vặn được nâng lên bằng các nếp gấp và phần eo co giãn, trong khi nhãn hiệu Christian Dior Couture được trang trí ở mặt sau. Hiện đại và thoải mái, quần thể thao sẽ tạo ra nhiều loại trang phục thể thao và trang phục trang trọng.',
    chat_lieu: '70% virgin wool, 30% linen',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/493C158A1001C800_E01?$default_GHC$&crop=748,150,504,1472&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/493C158A1001C800_E08?$default_GHC$&crop=758,150,492,1473&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        ]
      }
    ],
    hot: false,
    tags: ['quần thể thao may đo', 'cao cấp'],
    meta_title: 'quần thể thao may đo Louis Vuitton',
    meta_description: 'Mua quần thể thao may đo Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần thể thao may đo, Louis Vuitton, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần Cargo',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Quần cargo được may bằng vải gabardine cotton co giãn màu đen. Kiểu dáng tiện dụng có túi có nắp lớn, khóa cài ở mắt cá chân và miếng vá mềm đặc trưng của Dior ở mặt sau. Kiểu dáng giản dị khiến chúng trở thành sự kết hợp lý tưởng với bất kỳ áo phông hoặc áo nỉ trùm đầu nào trong mùa.',
    chat_lieu: '97% cotton, 3% elastane',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/013C122A3866C900_E01-2?$default_GHC$&crop=720,150,562,1474&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/013C122A3866C900_E08-2?$default_GHC$&crop=718,150,558,1474&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/013C122A3866C900_E09-2?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['quần Cargo', 'cao cấp'],
    meta_title: 'quần Cargo Louis Vuitton',
    meta_description: 'Mua quần Cargo Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'quần Cargo, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác khóa kéo cổ điển',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Kim Jones, Giám đốc sáng tạo của bộ sưu tập Dior Men, tôn vinh nghệ thuật may đo tại trung tâm di sản của Dior và hiện đại hóa tính thẩm mỹ của áo khoác có khóa kéo. Được chế tác bằng vải chéo pha len màu xám với lớp vải xếp nếp thanh lịch, áo được tô điểm bằng ghim CD Icon, túi ngực viền và túi viền bên hông. Với kiểu dáng cổ điển và cổ bẻ, áo khoác có thể phối hợp với bất kỳ quần Modern Tailoring nào.',
    chat_lieu: '55% wool, 45% polyester and lining: 100% cupro',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/193C243C6326C840_E01?$default_GHC$&crop=416,148,1161,1449&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_3_LOOK_134_E01?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_3_LOOK_134_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_3_LOOK_134_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_3_LOOK_134_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['áo khoác', 'cao cấp'],
    meta_title: 'áo khoác Louis Vuitton',
    meta_description: 'Mua áo khoác Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'áo khoác, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần Cargo',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Quần cargo mới cho mùa đông 2024, tái hiện lại các quy tắc về trang phục thể thao với phong cách thời trang cao cấp của Nhà mốt. Được chế tác bằng vải cotton pha màu be, chúng nổi bật với túi Saddle ở ống quần và miếng vá cao su Dior ở phía sau. Quần có thể kết hợp với áo khoác trong bộ sưu tập để hoàn thiện vẻ ngoài giản dị.',
    chat_lieu: '51% polyamide, 49% cotton',
    xuat_xu: 'Pháp',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Be',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/443C136A5851C140_E01?$default_GHC$&crop=740,150,551,1471&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_4_LOOK_122_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_4_LOOK_122_E15?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_24_4_LOOK_122_E16?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/443C136A5851C140_E09?$center_GH_GHC$&crop=0,0,2000,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ],
      }
    ],
    hot: false,
    tags: ['Quần Cargo','cao cấp'],
    meta_title: 'Quần Cargo Louis Vuitton',
    meta_description: 'Mua Quần Cargo Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Quần Cargo, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Áo khoác Louis Vuitton VÀ KAWS',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Áo khoác là một phần của bộ sưu tập độc quyền DIOR AND KAWS. Được làm bằng vải satin kỹ thuật màu hồng, áo khoác này khoe họa tiết Cannage chần bông mang tính biểu tượng trên khắp áo cũng như miếng vá thêu màu xanh lá cây của DIOR AND KAWS với chữ ký của Nhà thiết kế được tái hiện thành một con rắn đầy màu sắc. Áo khoác này được phân biệt bằng các đường xẻ bên hông có thể mặc mở hoặc đóng nhờ các nút bấm. Kết hợp giữa truyền thống và hiện đại, áo khoác sẽ kết hợp với quần jeans hoặc quần short Bermuda để hoàn thiện vẻ ngoài.',
    chat_lieu: '100% polyester',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Hồng',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/313C509E5918C400_E01?$default_GHC$&crop=436,150,1129,1464&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_004_E01-1?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_004_E02-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_004_E03?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/313C509E5918C400_E08?$default_GHC$&crop=460,152,1081,1457&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85'
        ]
      },
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Xanh navy',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/313C509E5918C540_E01?$default_GHC$&crop=445,149,1110,1434&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_009_E01-1?$lookDefault_GH-GHC$&crop=568,0,1862,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_009_E02-2?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_009_E03-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_009_E04-1?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['Áo khoác', 'sơ mi','cao cấp'],
    meta_title: 'Áo khoác Louis Vuitton',
    meta_description: 'Mua Áo khoác Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Áo khoác, Louis Vuitton,, cao cấp'
  },
  {
    _id: new ObjectId(),
    ten_sp: 'Quần thể thao may đo thêu biểu tượng CD',
    id_loai: loai_arr[0]._id,
    id_thuong_hieu: thuong_hieu_arr[3]._id,
    mo_ta: 'Quần thể thao may đo tái hiện trang phục thể thao thiết yếu với sự thanh lịch. Được chế tác bằng vải gabardine cotton đen, chúng có kiểu dáng vừa vặn được tăng cường bằng các nếp gấp và cạp chun, trong khi thêu biểu tượng CD làm điểm nhấn ở mặt sau. Hiện đại và thoải mái, quần thể thao sẽ tạo ra nhiều trang phục, vừa tinh tế vừa giản dị.',
    chat_lieu: '100% cotton',
    xuat_xu: 'Ý',
    variants: [
      {
        _id: new ObjectId(),
        kich_thuoc: ['S', 'M', 'L', 'XL'],
        mau_sac: 'Đen',
        so_luong: 20,
        hinh_chinh: 'https://assets.christiandior.com/is/image/diorprod/513C161A6472C989_E01?$default_GHC$&crop=764,147,469,1474&wid=720&hei=778&scale=0.3405&bfc=on&qlt=85',
        hinh_thumbnail: [
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_121_E13?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_121_E02?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_121_E15?$lookDefault_GH-GHC$&crop=568,0,1864,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85',
         'https://assets.christiandior.com/is/image/diorprod/LOOK_H_25_1_LOOK_121_E16?$lookDefault_GH-GHC$&crop=568,0,1861,2000&wid=720&hei=778&scale=0.3892&bfc=on&qlt=85'
        ]
      }
    ],
    hot: false,
    tags: ['Quần thể thao','cao cấp'],
    meta_title: 'Quần thể thao Louis Vuitton',
    meta_description: 'Mua Quần thể thao Louis Vuitton chất liệu taffeta, xuất xứ Pháp',
    meta_keywords: 'Quần thể thao, Louis Vuitton,, cao cấp'
  },

];

// Dữ liệu người dùng (NguoiDung)
const nguoi_dung_arr = [
  { _id: new ObjectId(), ho_ten: 'Nguyễn Văn A', email: 'nguyenvana@gmail.com', mat_khau: hash, vai_tro: 'admin' },
  { _id: new ObjectId(), ho_ten: 'Trần Thị B', email: 'tranthib@gmail.com', mat_khau: hash, vai_tro: 'khach_hang' }
];

// Dữ liệu đơn hàng (DonHang)
const don_hang_arr = [
  {
    _id: new ObjectId(),
    id_nguoi_dung: nguoi_dung_arr[1]._id,
    ma_don_hang: 'DH001',
    chi_tiet: [
      {
        id_thuoc_tinh: thuoc_tinh_sp_arr[0]._id,
        so_luong: 20,
        gia: 5000000
      }
    ],
    tong_tien: 10000000,
    dia_chi_giao_hang: '123 Đường Láng, TPHCM',
    phuong_thuc_thanh_toan: 'cod',
    trang_thai: 'cho_xac_nhan'
  }
];

// Dữ liệu bình luận (BinhLuan)
const binh_luan_arr = [
  {
    _id: new ObjectId(),
    id_san_pham: sp_arr[0]._id,
    id_nguoi_dung: nguoi_dung_arr[1]._id,
    ho_ten: 'Trần Thị B',
    diem: 5,
    noi_dung: 'Áo sơ mi rất đẹp, chất liệu lụa mềm mại, đáng giá tiền!',
    an_hien: true
  }
];

// Export dữ liệu
module.exports = {
  loai_arr,
  thuong_hieu_arr,
  sp_arr,
  thuoc_tinh_sp_arr,
  nguoi_dung_arr,
  don_hang_arr,
  binh_luan_arr
};