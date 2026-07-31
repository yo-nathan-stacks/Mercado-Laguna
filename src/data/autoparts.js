// autoparts.js — Auto parts listings with brand compatibility

export const autoBrands = ['Marca', 'Nissan', 'Chevrolet', 'Ford', 'Toyota', 'VW', 'Honda'];

export const autoPartsStats = [
  { num: '740', labelKey: 'ap.stats.parts' },
  { num: '62', labelKey: 'ap.stats.sellers' },
  { num: '4', labelKey: 'ap.stats.cities' },
  { num: '$150', labelKey: 'ap.stats.minPrice' },
];

export const autoParts = [
  {
    id: 'ap-1',
    icon: '🚗',
    compat: 'Nissan Tsuru / Sentra 2010–2017',
    name: 'Parachoque Delantero',
    price: 1200,
    condition: 'used',
    condText: '▪ Buen estado · Torreón',
  },
  {
    id: 'ap-2',
    icon: '🔋',
    compat: 'Chevrolet Aveo / Spark',
    name: 'Batería 12V 45Ah',
    price: 1850,
    condition: 'new',
    condText: '▪ Nueva · Gómez Palacio',
  },
  {
    id: 'ap-3',
    icon: '💨',
    compat: 'VW Jetta 2014–2019',
    name: 'Compresor A/C Original',
    price: 4200,
    condition: 'oem',
    condText: '▪ OEM Original VW',
  },
  {
    id: 'ap-4',
    icon: '🛞',
    compat: 'Universal 14"–15"',
    name: 'Rines x4 + Llantas',
    price: 3600,
    condition: 'used',
    condText: '▪ Muy buen estado · Lerdo',
  },
  {
    id: 'ap-5',
    icon: '🔦',
    compat: 'Nissan Versa 2012–2019',
    name: 'Faros LED Delanteros (Par)',
    price: 2400,
    condition: 'new',
    condText: '▪ Nuevos · Matamoros',
  },
  {
    id: 'ap-6',
    icon: '⚙️',
    compat: 'Ford F-150 2014–2018',
    name: 'Motor 5.0L V8 Completo',
    price: 32000,
    condition: 'used',
    condText: '▪ 95,000 km · Verificado',
  },
];

export const conditionConfig = {
  used: { badgeClass: 'orange', badgeText: 'Usado', condClass: 'cond-used' },
  new: { badgeClass: 'green', badgeText: 'Nuevo', condClass: 'cond-new' },
  oem: { badgeClass: 'blue', badgeText: 'OEM', condClass: 'cond-oem' },
};
