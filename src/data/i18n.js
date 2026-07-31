// i18n.js — Trilingual translations (es / en / zh) for MercadoCentral
// All UI strings extracted from the original artifact's data-es/data-en/data-zh attributes.

export const languages = {
  es: { code: 'es', label: 'ES', name: 'Español', flag: '🇲🇽' },
  en: { code: 'en', label: 'EN', name: 'English', flag: '🇺🇸' },
  zh: { code: 'zh', label: '中文', name: '中文', flag: '🇨🇳' },
};

export const defaultLang = 'es';

// Translation dictionary — keyed by translation key
export const translations = {
  // ─── Top Bar ───
  'topbar.msg': {
    es: '🚀 Vende hoy, gana mañana — 4 ciudades, 1 mercado, alcance global.',
    en: '🚀 Sell today, earn tomorrow — 4 cities, 1 marketplace, global reach.',
    zh: '🚀 今天销售，明天赚钱 — 4个城市，1个市场，全球影响力。',
  },
  'topbar.plansFrom': { es: 'Planes desde $0', en: 'Plans from $0', zh: '从 $0 开始的计划' },
  'topbar.signIn': { es: 'Iniciar Sesión', en: 'Sign In', zh: '登录' },
  'topbar.register': { es: 'Registrarse', en: 'Register', zh: '注册' },

  // ─── Nav ───
  'nav.searchPlaceholder': { es: 'Buscar en MercadoCentral...', en: 'Search MercadoCentral...', zh: '在MercadoCentral搜索...' },
  'nav.home': { es: 'Inicio', en: 'Home', zh: '首页' },
  'nav.jobs': { es: 'Empleos', en: 'Jobs', zh: '工作' },
  'nav.autoParts': { es: 'Partes Auto', en: 'Auto Parts', zh: '汽车零件' },
  'nav.swaps': { es: 'Intercambios', en: 'Swaps', zh: '交换' },
  'nav.payments': { es: 'Pagos', en: 'Payments', zh: '支付' },
  'nav.international': { es: 'Internacional', en: 'International', zh: '国际' },
  'nav.post': { es: '+ Publicar', en: '+ Post', zh: '+ 发布' },

  // ─── Category Bar ───
  'cat.all': { es: 'Todo', en: 'All', zh: '全部' },
  'cat.vehicles': { es: 'Vehículos', en: 'Vehicles', zh: '车辆' },
  'cat.autoParts': { es: 'Partes Auto', en: 'Auto Parts', zh: '汽车零件' },
  'cat.jobs': { es: 'Empleos', en: 'Jobs', zh: '工作' },
  'cat.swaps': { es: 'Intercambios', en: 'Swaps', zh: '交换' },
  'cat.services': { es: 'Servicios', en: 'Services', zh: '服务' },
  'cat.electronics': { es: 'Electrónica', en: 'Electronics', zh: '电子' },
  'cat.international': { es: 'Internacional', en: 'International', zh: '国际' },
  'cat.pets': { es: 'Mascotas', en: 'Pets', zh: '宠物' },
  'cat.business': { es: 'Negocios', en: 'Business', zh: '商业' },
  'cat.payments': { es: 'Pagos', en: 'Payments', zh: '支付' },

  // ─── Hero ───
  'hero.eyebrow': { es: 'La Comarca Lagunera — Alcance Global', en: 'La Comarca Lagunera — Global Reach', zh: '拉古内拉地区 — 全球覆盖' },
  'hero.title1': { es: 'Tu Mercado,', en: 'Your Market,', zh: '您的市场，' },
  'hero.title2': { es: 'Sin Fronteras.', en: 'No Borders.', zh: '无国界。' },
  'hero.subtitle': {
    es: 'Compra, vende, trabaja e intercambia desde Torreón, Gómez Palacio, Lerdo y Matamoros hacia todo el mundo. Pagos con PayPal, CoDi/SPEI y Nubank.',
    en: 'Buy, sell, work and swap from Torreón, Gómez Palacio, Lerdo and Matamoros to the whole world. Pay with PayPal, CoDi/SPEI and Nubank.',
    zh: '从托雷翁、戈麦斯帕拉西奥、莱尔多和马塔莫罗斯买卖交换，覆盖全球。支持PayPal、CoDi/SPEI和Nubank支付。',
  },
  'hero.cta1': { es: 'Vender Ahora', en: 'Start Selling', zh: '现在开始销售' },
  'hero.cta2': { es: 'Ver Modelos de Precios', en: 'See Pricing Models', zh: '查看定价模式' },
  'hero.stats.listings': { es: 'Anuncios Activos', en: 'Active Listings', zh: '活跃广告' },
  'hero.stats.sellers': { es: 'Vendedores', en: 'Sellers', zh: '卖家' },
  'hero.stats.jobs': { es: 'Empleos', en: 'Jobs', zh: '工作' },
  'hero.stats.countries': { es: 'Países', en: 'Countries', zh: '国家' },
  'hero.featured': { es: 'Destacado', en: 'Featured', zh: '精选' },

  // ─── Ad Strip ───
  'ad.label': { es: 'Anuncio', en: 'Ad', zh: '广告' },
  'ad.elTaller.title': { es: 'Refaccionaria El Taller — Torreón Centro', en: 'Refaccionaria El Taller — Downtown Torreón', zh: 'El Taller汽配店 — 托雷翁市中心' },
  'ad.elTaller.desc': {
    es: 'Piezas originales y genéricas para todas las marcas. Envíos a Gómez, Lerdo y Matamoros. ¡Cotiza hoy!',
    en: 'OEM and generic parts for all brands. Shipping to Gómez, Lerdo & Matamoros. Get a quote today!',
    zh: '所有品牌的原厂和通用零件。发货至戈麦斯、莱尔多和马塔莫罗斯。立即询价！',
  },
  'ad.seeOffer': { es: 'Ver Oferta', en: 'See Offer', zh: '查看优惠' },

  // ─── Category Grid ───
  'catGrid.title': { es: 'Explorar por', en: 'Browse by', zh: '按' },
  'catGrid.titleAccent': { es: 'Categoría', en: 'Category', zh: '分类' },
  'catGrid.jobsCount': { es: '320 activos', en: '320 active', zh: '320活跃' },
  'catGrid.autoPartsCount': { es: '740 piezas', en: '740 parts', zh: '740件' },
  'catGrid.swapsCount': { es: '210 ofertas', en: '210 offers', zh: '210个报价' },
  'catGrid.vehiclesCount': { es: '480 autos', en: '480 cars', zh: '480辆车' },
  'catGrid.servicesCount': { es: '265 servicios', en: '265 services', zh: '265项服务' },
  'catGrid.electronicsCount': { es: '380 items', en: '380 items', zh: '380件' },
  'catGrid.intlCount': { es: '40+ países', en: '40+ countries', zh: '40+国家' },
  'catGrid.digitalPayments': { es: 'Pagos Digitales', en: 'Digital Payments', zh: '数字支付' },
  'catGrid.paymentsCount': { es: 'PayPal · CoDi · Nu', en: 'PayPal · CoDi · Nu', zh: 'PayPal · CoDi · Nu' },
  'catGrid.realEstate': { es: 'Bienes Raíces', en: 'Real Estate', zh: '房产' },
  'catGrid.realEstateCount': { es: '92 propiedades', en: '92 properties', zh: '92处物业' },
  'catGrid.home': { es: 'Hogar', en: 'Home', zh: '家居' },
  'catGrid.homeCount': { es: '230 artículos', en: '230 items', zh: '230件' },
  'catGrid.garden': { es: 'Jardín', en: 'Garden', zh: '园艺' },
  'catGrid.gardenCount': { es: '110 artículos', en: '110 items', zh: '110件' },
  'catGrid.localBiz': { es: 'Negocios Locales', en: 'Local Biz', zh: '本地商家' },
  'catGrid.localBizCount': { es: '85 negocios', en: '85 businesses', zh: '85家商家' },

  // ─── Payments Section ───
  'pay.title1': { es: 'Pagos &', en: 'Payments &', zh: '支付与' },
  'pay.title2': { es: 'Transferencias', en: 'Transfers', zh: '转账' },
  'pay.subtitle': {
    es: 'MercadoCentral soporta los métodos de pago más usados en México y el mundo. Compra y vende con seguridad usando tu cuenta favorita.',
    en: 'MercadoCentral supports the most used payment methods in Mexico and worldwide. Buy and sell safely using your preferred account.',
    zh: 'MercadoCentral支持墨西哥和全球最常用的支付方式。使用您喜欢的账户安全买卖。',
  },
  'pay.paypal.desc': {
    es: 'Paga en MXN o USD. Protección al comprador incluida. Acepta tarjetas Visa/MC sin cuenta.',
    en: 'Pay in MXN or USD. Buyer protection included. Accepts Visa/MC without an account.',
    zh: '支持墨西哥比索或美元支付。含买家保护。无需账户可用Visa/MC。',
  },
  'pay.codi.desc': {
    es: 'Transferencia bancaria instantánea vía Banxico. Sin comisiones entre cuentas mexicanas. Disponible 24/7.',
    en: 'Instant bank transfer via Banxico. No fees between Mexican accounts. Available 24/7.',
    zh: '通过Banxico即时银行转账。墨西哥账户间无手续费。24/7全天候可用。',
  },
  'pay.nu.desc': {
    es: 'Banco digital 100% en tu celular. Tarjeta Nu, cuenta de ahorro y transferencias gratis entre usuarios Nu.',
    en: '100% digital bank on your phone. Nu card, savings account, and free transfers between Nu users.',
    zh: '100%手机数字银行。Nu卡、储蓄账户，Nu用户间免费转账。',
  },
  'pay.badge.intl': { es: 'Internacional', en: 'International', zh: '国际' },
  'pay.badge.mexico': { es: 'México', en: 'Mexico', zh: '墨西哥' },
  'pay.badge.digital': { es: 'Digital', en: 'Digital', zh: '数字' },

  // ─── Transfer Calculator ───
  'tw.title': { es: 'Calculadora de Transferencia', en: 'Transfer Calculator', zh: '转账计算器' },
  'tw.youSend': { es: 'Envías', en: 'You Send', zh: '您发送' },
  'tw.theyReceive': { es: 'Reciben', en: 'They Receive', zh: '对方收到' },
  'tw.rate': { es: 'Tasa', en: 'Rate', zh: '汇率' },
  'tw.updatedNow': { es: 'Actualizado ahora', en: 'Updated now', zh: '刚刚更新' },
  'tw.methodPaypal': { es: 'PayPal — comisión ~3.9%', en: 'PayPal — fee ~3.9%', zh: 'PayPal — 手续费~3.9%' },
  'tw.methodCodi': { es: 'CoDi/SPEI — Sin comisión (MXN)', en: 'CoDi/SPEI — No fee (MXN)', zh: 'CoDi/SPEI — 无手续费(MXN)' },
  'tw.methodNu': { es: 'Nubank — Sin comisión entre usuarios Nu', en: 'Nubank — No fee between Nu users', zh: 'Nubank — Nu用户间无手续费' },
  'tw.send': { es: 'Iniciar Transferencia', en: 'Start Transfer', zh: '开始转账' },
  'tw.feesNote': {
    es: 'Tasas de referencia. Las comisiones dependen del método elegido.',
    en: 'Reference rates. Fees depend on selected method.',
    zh: '参考汇率。手续费取决于所选方式。',
  },

  // ─── International Section ───
  'intl.title1': { es: 'Zona', en: '', zh: '' },
  'intl.title2': { es: 'Internacional', en: 'International', zh: '国际' },
  'intl.titleEn1': { es: '', en: 'International', zh: '' },
  'intl.subtitle': {
    es: 'Anuncios de compradores y vendedores fuera de México — envíos globales disponibles',
    en: 'Listings from buyers and sellers outside Mexico — global shipping available',
    zh: '来自墨西哥境外的买卖广告 — 支持全球发货',
  },
  'intl.seeAll': { es: 'Ver todos →', en: 'See all →', zh: '查看全部 →' },
  'intl.bannerTitle': {
    es: 'Alcance mundial desde La Comarca Lagunera',
    en: 'Worldwide reach from La Comarca Lagunera',
    zh: '从拉古内拉地区覆盖全球',
  },
  'intl.bannerDesc': {
    es: 'Publica en español, inglés o chino. Acepta PayPal para cobrar desde cualquier país.',
    en: 'Post in Spanish, English or Chinese. Accept PayPal to receive payment from any country.',
    zh: '用西班牙语、英语或中文发布。接受PayPal从任何国家收款。',
  },
  'intl.postIntl': { es: '+ Publicar Internacional', en: '+ Post International', zh: '+ 发布国际广告' },
  'intl.contact': { es: 'Contactar', en: 'Contact', zh: '联系' },

  // ─── Jobs Section ───
  'jobs.title1': { es: 'Encuentra', en: 'Find a', zh: '找' },
  'jobs.title2': { es: 'Trabajo', en: 'Job', zh: '工作' },
  'jobs.subtitle': {
    es: 'Torreón · Gómez Palacio · Lerdo · Matamoros — tiempo completo, parcial y remoto',
    en: 'Torreón · Gómez Palacio · Lerdo · Matamoros — full-time, part-time & remote',
    zh: '托雷翁·戈麦斯·莱尔多·马塔莫罗斯 — 全职、兼职和远程',
  },
  'jobs.seeAll': { es: 'Ver todos →', en: 'See all →', zh: '查看全部 →' },
  'jobs.apply': { es: 'Aplicar', en: 'Apply', zh: '申请' },

  // ─── Auto Parts Section ───
  'ap.title1': { es: 'Partes de Auto —', en: 'Auto Parts —', zh: '汽车零件 —' },
  'ap.title2': { es: 'Comarca Lagunera', en: 'Comarca Lagunera', zh: '拉古内拉地区' },
  'ap.desc': {
    es: 'Piezas usadas, nuevas y OEM para cualquier marca. Vendedores verificados en Torreón, Gómez, Lerdo y Matamoros.',
    en: 'Used, new and OEM parts for any brand. Verified sellers in Torreón, Gómez, Lerdo and Matamoros.',
    zh: '各种品牌的二手、全新和OEM零件。托雷翁、戈麦斯、莱尔多和马塔莫罗斯的认证卖家。',
  },
  'ap.brand': { es: 'Marca', en: 'Brand', zh: '品牌' },
  'ap.searchPlaceholder': { es: 'Buscar pieza...', en: 'Search part...', zh: '搜索零件...' },
  'ap.searchBtn': { es: 'Buscar', en: 'Search', zh: '搜索' },
  'ap.stats.parts': { es: 'Piezas Disponibles', en: 'Parts Available', zh: '可用零件' },
  'ap.stats.sellers': { es: 'Vendedores Verificados', en: 'Verified Sellers', zh: '认证卖家' },
  'ap.stats.cities': { es: 'Ciudades Laguna', en: 'Laguna Cities', zh: '拉古纳城市' },
  'ap.stats.minPrice': { es: 'Precio Mínimo MXN', en: 'Min Price MXN', zh: '最低价格MXN' },

  // ─── Pets Section ───
  'pets.title1': { es: 'Mascotas &', en: 'Pets &', zh: '宠物与' },
  'pets.title2': { es: 'Animales', en: 'Animals', zh: '动物' },
  'pets.subtitle': {
    es: 'Perdidos · Encontrados · Adopción · Cría — Perros, Gatos, Caballos, Toros y más',
    en: 'Lost · Found · Adoption · Breeding — Dogs, Cats, Horses, Bulls & more',
    zh: '走失·找到·领养·繁育 — 狗、猫、马、牛等',
  },
  'pets.seeAll': { es: 'Ver todos →', en: 'See all →', zh: '查看全部 →' },
  'pets.lostReport': { es: 'Reportar Mascota PERDIDA', en: 'Report LOST Pet', zh: '报告走失宠物' },
  'pets.lostDesc': { es: 'Publica foto, descripción y zona — gratis siempre', en: 'Post photo, description & area — always free', zh: '发布照片、描述和区域 — 永久免费' },
  'pets.foundReport': { es: 'Reportar Mascota ENCONTRADA', en: 'Report FOUND Pet', zh: '报告找到宠物' },
  'pets.foundDesc': { es: 'Ayuda a reunir familias — publica ahora', en: 'Help reunite families — post now', zh: '帮助家庭团聚 — 立即发布' },
  'pets.filterAll': { es: 'Todo', en: 'All', zh: '全部' },
  'pets.filterLost': { es: 'Perdidos', en: 'Lost', zh: '走失' },
  'pets.filterFound': { es: 'Encontrados', en: 'Found', zh: '找到' },
  'pets.filterAdopt': { es: 'Adopción', en: 'Adoption', zh: '领养' },
  'pets.filterBreed': { es: 'Cría & Venta', en: 'Breeding & Sale', zh: '繁育与出售' },
  'pets.filterHorse': { es: 'Caballos', en: 'Horses', zh: '马匹' },
  'pets.filterFarm': { es: 'Ganado', en: 'Livestock', zh: '牲畜' },
  'pets.tipTitle': { es: '¿Perdiste a tu mascota?', en: 'Lost your pet?', zh: '丢失了宠物？' },
  'pets.tipDesc': {
    es: 'Publica gratis en segundos. Los anuncios de mascotas perdidas nunca cobran comisión en MercadoCentral.',
    en: 'Post for free in seconds. Lost pet listings never charge a commission on MercadoCentral.',
    zh: '几秒内免费发布。MercadoCentral的走失宠物广告永不收取佣金。',
  },
  'pets.postNow': { es: '🚨 Publicar Ahora — Gratis', en: '🚨 Post Now — Free', zh: '🚨 立即发布 — 免费' },

  // ─── Swap Section ───
  'swap.title1': { es: 'Zona de', en: 'Swap', zh: '交换' },
  'swap.title2': { es: 'Intercambios', en: 'Zone', zh: '专区' },
  'swap.subtitle': { es: '¿No tienes efectivo? ¡Intercambia lo que tienes!', en: 'No cash? Swap what you have!', zh: '没有现金？用你拥有的来换！' },
  'swap.seeAll': { es: 'Ver todos →', en: 'See all →', zh: '查看全部 →' },
  'swap.step1': { es: 'Publica lo que ofreces', en: 'Post what you offer', zh: '发布你提供的' },
  'swap.step2': { es: 'Di qué quieres a cambio', en: 'Say what you want', zh: '说明你想要的' },
  'swap.step3': { es: '¡Coordina y listo!', en: 'Coordinate & done!', zh: '协调就完成！' },
  'swap.postBtn': { es: '+ Publicar Intercambio Gratis', en: '+ Post Swap Free', zh: '+ 免费发布交换' },

  // ─── Pricing ───
  'pricing.title1': { es: 'Planes para', en: 'Seller', zh: '卖家' },
  'pricing.title2': { es: 'Vendedores', en: 'Plans', zh: '套餐' },
  'pricing.subtitle': { es: 'Empieza gratis. Crece cuando estés listo.', en: 'Start free. Grow when ready.', zh: '免费开始，随时升级。' },
  'pricing.free.name': { es: 'Gratis', en: 'Free', zh: '免费' },
  'pricing.free.desc': { es: 'Para empezar sin tarjeta', en: 'To start without a card', zh: '无需银行卡即可开始' },
  'pricing.free.f1': { es: '5 anuncios activos', en: '5 active listings', zh: '5个活跃广告' },
  'pricing.free.f2': { es: 'Fotos básicas', en: 'Basic photos', zh: '基础照片' },
  'pricing.free.f3': { es: 'Chat con compradores', en: 'Chat with buyers', zh: '与买家聊天' },
  'pricing.free.n1': { es: 'Sin anuncios destacados', en: 'No featured listings', zh: '无精选广告' },
  'pricing.free.n2': { es: 'Sin badge verificado', en: 'No verified badge', zh: '无认证徽章' },
  'pricing.free.n3': { es: 'Sin pagos digitales integrados', en: 'No integrated digital payments', zh: '无集成数字支付' },
  'pricing.free.btn': { es: 'Comenzar Gratis', en: 'Start Free', zh: '免费开始' },
  'pricing.pro.popular': { es: '⭐ Más Popular', en: '⭐ Most Popular', zh: '⭐ 最受欢迎' },
  'pricing.pro.name': { es: 'Vendedor Pro', en: 'Seller Pro', zh: '专业卖家' },
  'pricing.pro.desc': { es: 'Para vendedores activos', en: 'For active sellers', zh: '适合活跃卖家' },
  'pricing.pro.f1': { es: 'Anuncios ilimitados', en: 'Unlimited listings', zh: '无限广告' },
  'pricing.pro.f2': { es: '3 anuncios destacados/mes', en: '3 featured listings/mo', zh: '每月3个精选广告' },
  'pricing.pro.f3': { es: 'Badge Verificado ✓', en: 'Verified Badge ✓', zh: '认证徽章 ✓' },
  'pricing.pro.f4': { es: 'PayPal + CoDi integrado', en: 'PayPal + CoDi integrated', zh: '集成PayPal+CoDi' },
  'pricing.pro.f5': { es: 'Nubank integrado', en: 'Nubank integrated', zh: '集成Nubank' },
  'pricing.pro.n1': { es: 'Sin vitrina de negocio', en: 'No business showcase', zh: '无商业展示橱窗' },
  'pricing.pro.btn': { es: 'Activar Pro', en: 'Activate Pro', zh: '激活专业版' },
  'pricing.biz.name': { es: 'Negocio', en: 'Business', zh: '商业' },
  'pricing.biz.desc': { es: 'Para tiendas y comercios', en: 'For shops & merchants', zh: '适合商店和商家' },
  'pricing.biz.f1': { es: 'Todo de Pro', en: 'Everything in Pro', zh: '包含专业版全部' },
  'pricing.biz.f2': { es: 'Vitrina de negocio dedicada', en: 'Dedicated business showcase', zh: '专属商业展示' },
  'pricing.biz.f3': { es: '10 anuncios destacados/mes', en: '10 featured listings/mo', zh: '每月10个精选广告' },
  'pricing.biz.f4': { es: 'Perfil Internacional 🌎', en: 'International Profile 🌎', zh: '国际资料 🌎' },
  'pricing.biz.f5': { es: 'Soporte prioritario', en: 'Priority support', zh: '优先支持' },
  'pricing.biz.f6': { es: 'Estadísticas avanzadas', en: 'Advanced analytics', zh: '高级统计' },
  'pricing.biz.btn': { es: 'Activar Negocio', en: 'Activate Business', zh: '激活商业版' },
  'pricing.perMonth': { es: '/mes', en: '/mo', zh: '/月' },

  // ─── Trust ───
  'trust.title1': { es: '¿Por qué', en: 'Why', zh: '为什么选择' },
  'trust.title2': { es: 'MercadoCentral?', en: 'MercadoCentral?', zh: 'MercadoCentral？' },
  'trust.securePay.title': { es: 'Pagos Seguros', en: 'Secure Payments', zh: '安全支付' },
  'trust.securePay.desc': {
    es: 'PayPal, CoDi/SPEI y Nubank verificados. Protección al comprador en todas las transacciones.',
    en: 'Verified PayPal, CoDi/SPEI and Nubank. Buyer protection on all transactions.',
    zh: '认证的PayPal、CoDi/SPEI和Nubank。所有交易含买家保护。',
  },
  'trust.cities.title': { es: '4 Ciudades, 1 Mercado', en: '4 Cities, 1 Market', zh: '4城1市' },
  'trust.cities.desc': {
    es: 'Torreón, Gómez Palacio, Lerdo y Matamoros unidos en una sola plataforma.',
    en: 'Torreón, Gómez Palacio, Lerdo and Matamoros united on one platform.',
    zh: '托雷翁、戈麦斯帕拉西奥、莱尔多和马塔莫罗斯统一在一个平台。',
  },
  'trust.global.title': { es: 'Alcance Global', en: 'Global Reach', zh: '全球覆盖' },
  'trust.global.desc': {
    es: 'Vende a compradores en más de 40 países. Publica en español, inglés o chino.',
    en: 'Sell to buyers in 40+ countries. Post in Spanish, English or Chinese.',
    zh: '卖给40+国家的买家。用西班牙语、英语或中文发布。',
  },
  'trust.multiCurr.title': { es: 'Multi-Moneda', en: 'Multi-Currency', zh: '多货币' },
  'trust.multiCurr.desc': {
    es: 'MXN, USD, EUR y más. Calculadora de tasas en tiempo real integrada.',
    en: 'MXN, USD, EUR and more. Real-time rate calculator integrated.',
    zh: 'MXN、USD、EUR等。集成实时汇率计算器。',
  },
  'trust.verified.title': { es: 'Vendedores Verificados', en: 'Verified Sellers', zh: '认证卖家' },
  'trust.verified.desc': {
    es: 'Sistema de calificaciones y badges de confianza para compradores y vendedores.',
    en: 'Rating system and trust badges for buyers and sellers.',
    zh: '买家和卖家的评分系统和信任徽章。',
  },
  'trust.mobile.title': { es: '100% Móvil', en: '100% Mobile', zh: '100%移动' },
  'trust.mobile.desc': {
    es: 'Diseñado para tu teléfono. Publica, compra y transfiere desde donde estés.',
    en: 'Designed for your phone. Post, buy and transfer from anywhere.',
    zh: '为手机设计。随时随地发布、购买和转账。',
  },

  // ─── Footer ───
  'footer.tagline': {
    es: 'El mercado de La Comarca Lagunera con alcance global. Torreón · Gómez · Lerdo · Matamoros.',
    en: 'The marketplace of La Comarca Lagunera with global reach. Torreón · Gómez · Lerdo · Matamoros.',
    zh: '拉古内拉地区的市场，覆盖全球。托雷翁·戈麦斯·莱尔多·马塔莫罗斯。',
  },
  'footer.explore': { es: 'Explorar', en: 'Explore', zh: '探索' },
  'footer.explore.jobs': { es: 'Empleos Locales', en: 'Local Jobs', zh: '本地工作' },
  'footer.explore.autoParts': { es: 'Partes de Auto', en: 'Auto Parts', zh: '汽车零件' },
  'footer.explore.swaps': { es: 'Intercambios', en: 'Swaps', zh: '交换' },
  'footer.explore.intl': { es: 'Internacional 🌎', en: 'International 🌎', zh: '国际 🌎' },
  'footer.explore.services': { es: 'Servicios', en: 'Services', zh: '服务' },
  'footer.payments': { es: 'Pagos', en: 'Payments', zh: '支付' },
  'footer.payments.paypal': { es: 'PayPal', en: 'PayPal', zh: 'PayPal' },
  'footer.payments.codi': { es: 'CoDi / SPEI', en: 'CoDi / SPEI', zh: 'CoDi / SPEI' },
  'footer.payments.nu': { es: 'Nubank', en: 'Nubank', zh: 'Nubank' },
  'footer.payments.calc': { es: 'Calculadora de Divisas', en: 'Currency Calculator', zh: '货币计算器' },
  'footer.cities': { es: 'Ciudades', en: 'Cities', zh: '城市' },
  'footer.copyright': {
    es: '© 2026 MercadoCentral — La Comarca Lagunera · Todos los derechos reservados',
    en: '© 2026 MercadoCentral — La Comarca Lagunera · All rights reserved',
    zh: '© 2026 MercadoCentral — 拉古内拉地区 · 版权所有',
  },

  // ─── Publish Modal ───
  'modal.title': { es: 'Publicar Anuncio', en: 'Post Listing', zh: '发布广告' },
  'modal.category': { es: 'Categoría', en: 'Category', zh: '分类' },
  'modal.title.label': { es: 'Título', en: 'Title', zh: '标题' },
  'modal.title.ph': { es: 'Ej: Vendo Nissan Tsuru 2017', en: 'e.g. Selling 2017 Nissan Tsuru', zh: '例如：出售2017日产Tsuru' },
  'modal.price': { es: 'Precio (MXN)', en: 'Price (MXN)', zh: '价格(MXN)' },
  'modal.city': { es: 'Ciudad', en: 'City', zh: '城市' },
  'modal.desc': { es: 'Descripción', en: 'Description', zh: '描述' },
  'modal.desc.ph': { es: 'Describe tu producto o servicio...', en: 'Describe your product or service...', zh: '描述您的产品或服务...' },
  'modal.whatsapp': { es: 'WhatsApp (con código de país)', en: 'WhatsApp (with country code)', zh: 'WhatsApp（含国家代码）' },
  'modal.whatsapp.ph': { es: 'Ej: 5218711234567', en: 'e.g. 5218711234567', zh: '例如：5218711234567' },
  'modal.submit': { es: 'Publicar Ahora', en: 'Post Now', zh: '立即发布' },
  'modal.cancel': { es: 'Cancelar', en: 'Cancel', zh: '取消' },
  'modal.success': { es: '¡Anuncio publicado! Abriendo WhatsApp...', en: 'Listing posted! Opening WhatsApp...', zh: '广告已发布！正在打开WhatsApp...' },
};

// Helper: translate a key for a given language
export function t(key, lang = defaultLang) {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry[defaultLang] || key;
}
