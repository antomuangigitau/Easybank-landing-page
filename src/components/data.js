const items = [
  {
    id: 1,
    img: require('../images/icon-online.svg').default,
    title: 'Online Banking',
    description: `Our modern web and mobile applications allow you to keep track of your finances
    wherever you are in the world.`,
  },
  {
    id: 2,
    img: require('../images/icon-budgeting.svg').default,
    title: 'Simple Budgeting',
    description: `See exactly where your money goes each month. Receive notifications when you’re
  close to hitting your limits.`,
  },
  {
    id: 3,
    img: require('../images/icon-onboarding.svg').default,
    title: 'Fast Onboarding',
    description: `We don’t do branches. Open your account in minutes online and start taking control
  of your finances right away.`,
  },
  {
    id: 4,
    img: require('../images/icon-api.svg').default,
    title: 'Open API',
    description: `Manage your savings, investments, pension, and much more from one account. Tracking
  your money has never been easier.`,
  },
];

const moreItems = [
  {
    id: 1,
    img: require('../images/image-currency.jpg'),
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    message: `The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …`,
  },
  {
    id: 2,
    img: require('../images/image-restaurant.jpg'),
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    message: `Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …`,
  },
  {
    id: 3,
    img: require('../images/image-plane.jpg'),
    author: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    message: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …`,
  },
  {
    id: 4,
    img: require('../images/image-confetti.jpg'),
    author: 'By Claire Robinson',
    title: ' Our invite-only Beta accounts are now live!',
    message: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...`,
  },
];

const socials = [
  {
    id: 1,
    img: require('../images/icon-facebook.svg').default,
  },
  {
    id: 2,
    img: require('../images/icon-youtube.svg').default,
  },
  {
    id: 3,
    img: require('../images/icon-twitter.svg').default,
  },
  {
    id: 4,
    img: require('../images/icon-pinterest.svg').default,
  },
  {
    id: 5,
    img: require('../images/icon-instagram.svg').default,
  },
];

module.exports = {
  moreItems: moreItems,
  items: items,
  socials: socials,
};
