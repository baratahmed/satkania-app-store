import Product from '../models/product';

import Area from '../models/area';


export const AREA = [
  new Area('a1',  'ধর্মপুর', '#f5428d'),
  new Area('a2', 'এওচিয়া', '#f54242'),
  new Area('a3', 'সাতকানিয়া', '#f5a442'),
  new Area('a4', 'কেওঁচিয়া', '#f5d142'),
  new Area('a5', 'পুরানগড়', '#368dff'),
  new Area('a6', 'চরতি', '#41d95d'),
  new Area('a7', 'বাজালিয়া', '#9eecff'),
  new Area('a8', 'খাগরিয়া', '#b9ffb0'),
  new Area('a9', 'ছদাহা', '#ffc7ff'),
  new Area('a10', 'পৌরসভা','#47fced'),
  new Area('a11',  'ঢেমসা', '#f5428d'),
  new Area('a12', 'পশ্চিম ঢেমসা', '#f54242'),
  new Area('a13', 'কাঞ্চনা', '#f5a442'),
  new Area('a14', 'নলুয়া', '#f5d142'),
  new Area('a15', 'আমিলাইশ', '#368dff'),
  new Area('a16', 'মাদার্শা', '#41d95d'),
  new Area('a17', 'কালিয়াইশ', '#9eecff'),
  new Area('a18', 'সোনাকিয়া', '#b9ffb0'),

];

const PRODUCTS = [
  new Product(
    'p8',
    'u2',
    'দেশি মুরগী',
    'https://api.dev.satkaniacec.info/attachments/brzlefjqa5w30jihub3sz9cjs/primary-image-thumb.jpeg',
    'জবাই করার আগে ওজন করা হয়',
    440
  ),
  new Product(
    'p7',
    'u1',
    'কম্পিউটার অফিস এ্যপ্লিকেশন',
    'https://api.dev.satkaniacec.info/attachments/128eom19ccharfbk7ijp41o61/primary-image-thumb.jpeg',
    'কম্পিউটার অফিস এ্যপ্লিকেশন ৩/৬ মাসের কোর্সের বই',
    200
  ),
  new Product(
    'p1',
    'u1',
    'লাল শার্ট',
    'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
    'এটি সুতা দিয়ে গঠিত। পড়ে আরাম পাওয়া যাবে।',
    2500
  ),
  new Product(
    'p2',
    'u1',
    'নীল কার্পেট',
    'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'এটি আপনার ঘরকে আরো সুন্দর রাখবে।',
    8200
  ),
  new Product(
    'p3',
    'u2',
    'কফি মগ',
    'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    'এটি দিয়ে অবশ্য আপনি চাও খেতে পারবেন।',
    820
  ),
  new Product(
    'p4',
    'u3',
    'বই',
    'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg',
    "What the content is? Why would that matter? It's a limited edition!",
    1300
  ),
  new Product(
    'p5',
    'u3',
    'ল্যাপ্টপ',
    'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
    'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
    80000
  ),
  new Product(
    'p6',
    'u1',
    'কাগজ ও কলম',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
    200
  )
];

export default PRODUCTS;
