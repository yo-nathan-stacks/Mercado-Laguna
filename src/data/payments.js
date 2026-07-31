// payments.js — Payment methods and trust cards

export const paymentMethods = [
  {
    id: 'paypal',
    name: 'PayPal',
    logo: '💙',
    logoClass: 'pp',
    descKey: 'pay.paypal.desc',
    badgeKey: 'pay.badge.intl',
    badgeClass: 'intl',
  },
  {
    id: 'codi',
    name: 'CoDi / SPEI',
    logo: '🆕',
    logoClass: 'codi',
    descKey: 'pay.codi.desc',
    badgeKey: 'pay.badge.mexico',
    badgeClass: 'local',
  },
  {
    id: 'nubank',
    name: 'Nubank (Nu México)',
    logo: '💜',
    logoClass: 'nu',
    descKey: 'pay.nu.desc',
    badgeKey: 'pay.badge.digital',
    badgeClass: 'dig',
  },
];

export const trustCards = [
  { icon: '🛡️', titleKey: 'trust.securePay.title', descKey: 'trust.securePay.desc' },
  { icon: '📍', titleKey: 'trust.cities.title', descKey: 'trust.cities.desc' },
  { icon: '🌎', titleKey: 'trust.global.title', descKey: 'trust.global.desc' },
  { icon: '💱', titleKey: 'trust.multiCurr.title', descKey: 'trust.multiCurr.desc' },
  { icon: '✅', titleKey: 'trust.verified.title', descKey: 'trust.verified.desc' },
  { icon: '📱', titleKey: 'trust.mobile.title', descKey: 'trust.mobile.desc' },
];
