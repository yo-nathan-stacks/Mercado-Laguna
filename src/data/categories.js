// categories.js — Marketplace categories for grid and filter bar

export const categories = [
  { id: 'all', icon: '🏠', nameKey: 'cat.all', color: 'gold' },
  { id: 'vehicles', icon: '🚗', nameKey: 'cat.vehicles', color: 'gold', countKey: 'catGrid.vehiclesCount' },
  { id: 'autoparts', icon: '🔧', nameKey: 'cat.autoParts', color: 'orange', countKey: 'catGrid.autoPartsCount' },
  { id: 'jobs', icon: '💼', nameKey: 'cat.jobs', color: 'blue', countKey: 'catGrid.jobsCount' },
  { id: 'swaps', icon: '🔄', nameKey: 'cat.swaps', color: 'green', countKey: 'catGrid.swapsCount' },
  { id: 'services', icon: '🛠️', nameKey: 'cat.services', color: 'teal', countKey: 'catGrid.servicesCount' },
  { id: 'electronics', icon: '📱', nameKey: 'cat.electronics', color: 'red', countKey: 'catGrid.electronicsCount' },
  { id: 'international', icon: '🌎', nameKey: 'cat.international', color: 'purple', countKey: 'catGrid.intlCount' },
  { id: 'pets', icon: '🐾', nameKey: 'cat.pets', color: 'teal' },
  { id: 'business', icon: '🏪', nameKey: 'cat.business', color: 'orange', countKey: 'catGrid.localBizCount' },
  { id: 'payments', icon: '💳', nameKey: 'cat.payments', color: 'teal' },
  { id: 'realestate', icon: '🏠', nameKey: 'catGrid.realEstate', color: 'gold', countKey: 'catGrid.realEstateCount', gridOnly: true },
  { id: 'home', icon: '🛋️', nameKey: 'catGrid.home', color: 'blue', countKey: 'catGrid.homeCount', gridOnly: true },
  { id: 'garden', icon: '🌿', nameKey: 'catGrid.garden', color: 'green', countKey: 'catGrid.gardenCount', gridOnly: true },
  { id: 'localbiz', icon: '🏪', nameKey: 'catGrid.localBiz', color: 'orange', countKey: 'catGrid.localBizCount', gridOnly: true },
  { id: 'digitalpayments', icon: '💳', nameKey: 'catGrid.digitalPayments', color: 'teal', countKey: 'catGrid.paymentsCount', gridOnly: true },
];

// Categories shown in the quick-grid (12 items, matching original)
export const gridCategories = [
  { icon: '💼', nameKey: 'cat.jobs', countKey: 'catGrid.jobsCount', color: 'blue' },
  { icon: '🔧', nameKey: 'cat.autoParts', countKey: 'catGrid.autoPartsCount', color: 'orange' },
  { icon: '🔄', nameKey: 'cat.swaps', countKey: 'catGrid.swapsCount', color: 'green' },
  { icon: '🚗', nameKey: 'cat.vehicles', countKey: 'catGrid.vehiclesCount', color: 'gold' },
  { icon: '🛠️', nameKey: 'cat.services', countKey: 'catGrid.servicesCount', color: 'teal' },
  { icon: '📱', nameKey: 'cat.electronics', countKey: 'catGrid.electronicsCount', color: 'red' },
  { icon: '🌎', nameKey: 'cat.international', countKey: 'catGrid.intlCount', color: 'purple' },
  { icon: '💳', nameKey: 'catGrid.digitalPayments', countKey: 'catGrid.paymentsCount', color: 'teal' },
  { icon: '🏠', nameKey: 'catGrid.realEstate', countKey: 'catGrid.realEstateCount', color: 'gold' },
  { icon: '🛋️', nameKey: 'catGrid.home', countKey: 'catGrid.homeCount', color: 'blue' },
  { icon: '🌿', nameKey: 'catGrid.garden', countKey: 'catGrid.gardenCount', color: 'green' },
  { icon: '🏪', nameKey: 'catGrid.localBiz', countKey: 'catGrid.localBizCount', color: 'orange' },
];

// Category bar items (horizontal scroll filter)
export const categoryBarItems = [
  { id: 'all', icon: '🏠', nameKey: 'cat.all' },
  { id: 'vehicles', icon: '🚗', nameKey: 'cat.vehicles' },
  { id: 'autoparts', icon: '🔧', nameKey: 'cat.autoParts' },
  { id: 'jobs', icon: '💼', nameKey: 'cat.jobs' },
  { id: 'swaps', icon: '🔄', nameKey: 'cat.swaps' },
  { id: 'services', icon: '🛠️', nameKey: 'cat.services' },
  { id: 'electronics', icon: '📱', nameKey: 'cat.electronics' },
  { id: 'international', icon: '🌎', nameKey: 'cat.international' },
  { id: 'pets', icon: '🐾', nameKey: 'cat.pets' },
  { id: 'business', icon: '🏪', nameKey: 'cat.business' },
  { id: 'payments', icon: '💳', nameKey: 'cat.payments' },
];
