// 店家资讯常数
export const STORE_INFO = {
  name: '虾姑猪脚姜',
  nameShort: '虾姑猪脚姜',
  subtitle: '沙姜猪脚 · 咸香Q弹 | 猪脚姜 · 甜辣暖胃',
  tagline: '一店双味 · 正宗粤式猪脚美味',
  address: '广东省中山市小榄镇东升同乐路33号',
  phone: '18688647083',
  phoneDisplay: '186-8864-7083',
  hours: '周一至周日 08:00 - 21:00',
  hoursMonday: '08:00 - 21:00',
  hoursTuesday: '08:00 - 21:00',
  hoursWednesday: '08:00 - 21:00',
  hoursThursday: '08:00 - 21:00',
  hoursFriday: '08:00 - 21:00',
  hoursSaturday: '08:00 - 21:00',
  hoursSunday: '08:00 - 21:00',
  mapQuery: '广东省中山市小榄镇东升同乐路33号',
  description: '位于广东省中山市小榄镇的粤式传统美食小店，以沙姜猪脚与猪脚姜两大粤式猪脚经典做法闻名。',
  // SEO
  keywords: '小榄猪脚姜,中山沙姜猪脚,中山美食,小榄美食,粤式猪脚,虾姑猪脚姜,沙姜猪脚,猪脚姜',
  // Social
  instagram: '#',
  xiaohongshu: '#',
};

// 菜品资讯
export const MENU_ITEMS = [
  {
    id: 'sha-jiang-pig-foot',
    name: '沙姜猪脚',
    nameEn: 'Sha Jiang Pig Trotter',
    category: '招牌沙姜系列',
    description: '肉质脆爽、Q弹紧致，沙姜香气浓郁，辛香与鲜味完美融合的经典粤式凉菜。',
    process: ['焯水去腥', '高压炖煮', '冰水浸泡', '沙姜碎爆香，混合生抽、白糖、高汤'],
    price: '时价',
    image: '/images/menu/sha-jiang-pig-foot.jpg',
    alt: '沙姜猪脚 — 粤式经典凉菜，肉质Q弹爽脆',
  },
  {
    id: 'ginger-vinegar-pig-foot',
    name: '猪脚姜',
    nameEn: 'Ginger Vinegar Pig Trotter',
    category: '招牌姜醋系列',
    description: '甜中带辣，胶质丰富。老姜与甜醋的完美结合，开胃提神、补血补钙、养颜美肤的传统滋补美食。',
    process: ['老姜炒香', '猪脚焯水', '甜醋与鸡蛋焖煮', '瓦煲慢火炖煮入味'],
    price: '时价',
    image: '/images/menu/ginger-vinegar-pig-foot.jpg',
    alt: '猪脚姜 — 传统粤式滋补美食，甜醋焖煮，暖胃养身',
  },
];

// Brand colors (同步 Tailwind 主题)
export const COLORS = {
  primary: '#D4A04A',      // 沙姜暖黄
  secondary: '#8B5A2B',   // 酱色
  background: '#FDF8F0',  // 米白暖色基底
  accent: '#B22222',       // 甜醋红
  textPrimary: '#2C1810',  // 深棕
};
