// 店家資訊常數
export const STORE_INFO = {
  name: '虾姑猪脚姜',
  nameShort: '虾姑猪脚姜',
  subtitle: '沙薑豬腳 · 鹹香Q彈 | 豬腳薑 · 甜辣暖胃',
  tagline: '一店雙味 · 正宗粵式豬腳美味',
  address: '广东省中山市小榄镇东升同乐路33号',
  phone: '18688647083',
  phoneDisplay: '186-8864-7083',
  hours: '週一至週日 08:00 - 21:00',
  hoursMonday: '08:00 - 21:00',
  hoursTuesday: '08:00 - 21:00',
  hoursWednesday: '08:00 - 21:00',
  hoursThursday: '08:00 - 21:00',
  hoursFriday: '08:00 - 21:00',
  hoursSaturday: '08:00 - 21:00',
  hoursSunday: '08:00 - 21:00',
  mapQuery: '广东省中山市小榄镇东升同乐路33号',
  description: '位於廣東省中山市小榄鎮的粵式傳統美食小店，以沙薑豬腳與豬腳薑兩大粵式豬腳經典做法聞名。',
  // SEO
  keywords: '小榄豬腳薑,中山沙薑豬腳,中山美食,小榄美食,粵式豬腳,蝦姑豬腳薑,沙薑豬腳,豬腳薑',
  // Social
  instagram: '#',
  xiaohongshu: '#',
};

// 菜品資訊
export const MENU_ITEMS = [
  {
    id: 'sha-jiang-pig-foot',
    name: '沙薑豬腳',
    nameEn: 'Sha Jiang Pig Trotter',
    category: '招牌沙薑系列',
    description: '肉質脆爽、Q彈緊緻，沙薑香氣濃郁，辛香與鮮味完美融合的經典粵式涼菜。',
    process: ['焯水去腥', '高壓燉煮', '冰水浸泡', '沙薑碎爆香，混合生抽、白糖、高湯'],
    price: '時價',
    image: '/images/menu/sha-jiang-pig-foot.jpg',
    alt: '沙薑豬腳 — 粵式經典涼菜，肉質Q彈爽脆',
  },
  {
    id: 'ginger-vinegar-pig-foot',
    name: '豬腳薑',
    nameEn: 'Ginger Vinegar Pig Trotter',
    category: '招牌薑醋系列',
    description: '甜中帶辣，膠質豐富。老薑與甜醋的完美結合，開胃提神、補血補鈣、養顏美膚的傳統滋補美食。',
    process: ['老薑炒香', '豬腳焯水', '甜醋與雞蛋燜煮', '瓦煲慢火燉煮入味'],
    price: '時價',
    image: '/images/menu/ginger-vinegar-pig-foot.jpg',
    alt: '豬腳薑 — 傳統粵式滋補美食，甜醋燜煮，暖胃養身',
  },
];

// Brand colors (同步 Tailwind 主題)
export const COLORS = {
  primary: '#D4A04A',      // 沙薑暖黃
  secondary: '#8B5A2B',   // 醬色
  background: '#FDF8F0',  // 米白暖色基底
  accent: '#B22222',       // 甜醋紅
  textPrimary: '#2C1810',  // 深棕
};
