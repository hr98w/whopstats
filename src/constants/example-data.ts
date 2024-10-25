export interface ExampleItem {
  id: number;
  name: string;
  category: string;
  sub_category: string;
  desc: string;
  score: number;
  review_count: number;
  price_text: string;
  estimate_revenue: number;
  url: string;
}

const exampleData: ExampleItem[] = [
  {
    id: 1,
    name: 'The Ones That Know',
    category: 'Trading',
    sub_category: 'Technical Analysis',
    desc: 'The #1 ICT Trading Community.	',
    score: 4.93,
    review_count: 705,
    price_text: '$450.00',
    estimate_revenue: 317250,
    url: 'https://whop.com/marketplace/the-ones-that-know',
  },
  {
    id: 2,
    name: 'Wealth Group',
    category: 'Trading',
    sub_category: 'Crypto',
    desc: 'Unlock Crypto Wealth: Expert Education, Charts & Exclusive Community',
    score: 4.88,
    review_count: 1077,
    price_text: '$225.00',
    estimate_revenue: 242325,
    url: 'https://whop.com/marketplace/wealthgroup',
  },
  {
    id: 3,
    name: 'Frugal Season',
    category: 'Reselling',
    sub_category: 'E-Commerce',
    desc: 'Add an extra $1,000/month to your income.',
    score: 4.98,
    review_count: 2834,
    price_text: '$75.00',
    estimate_revenue: 212550,
    url: 'https://whop.com/marketplace/frugal-szn-1',
  },
  {
    id: 4,
    name: 'Divine',
    category: 'Reselling',
    sub_category: 'General',
    desc: 'Helping Hundreds Make Thousands With Reselling, Price Errors, Sneaker Reselling, Trading Indicators, Sports Picks, Crypto, Ecommerce, FBA, and More.',
    score: 4.97,
    review_count: 2704,
    price_text: '$69.99',
    estimate_revenue: 189252.96,
    url: 'https://whop.com/marketplace/divine',
  },
  {
    id: 5,
    name: 'Resell Royale 👑',
    category: 'Reselling',
    sub_category: 'E-Commerce',
    desc: 'Making money from your phone has never been easier 📲',
    score: 4.97,
    review_count: 308,
    price_text: '$499.00',
    estimate_revenue: 153692,
    url: 'https://whop.com/marketplace/resellroyale',
  },
];

export default exampleData;
