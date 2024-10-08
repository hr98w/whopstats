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
    name: 'Product One',
    category: 'Electronics',
    sub_category: 'Mobile Phones',
    desc: 'A high-quality smartphone with excellent features.',
    score: 4.5,
    review_count: 150,
    price_text: '$299.99',
    estimate_revenue: 44998.5,
    url: 'https://example.com/product-one',
  },
  {
    id: 2,
    name: 'Product Two',
    category: 'Home Appliances',
    sub_category: 'Vacuum Cleaners',
    desc: 'A powerful vacuum cleaner for all your home needs.',
    score: 4.0,
    review_count: 85,
    price_text: '$199.99',
    estimate_revenue: 16998.15,
    url: 'https://example.com/product-two',
  },
  {
    id: 3,
    name: 'Product Three',
    category: 'Electronics',
    sub_category: 'Laptops',
    desc: 'A lightweight laptop with long battery life.',
    score: 4.7,
    review_count: 200,
    price_text: '$999.99',
    estimate_revenue: 199998.0,
    url: 'https://example.com/product-three',
  },
  // 添加更多示例项
  {
    id: 4,
    name: 'Product Four',
    category: 'Fitness',
    sub_category: 'Treadmills',
    desc: 'A durable treadmill for your home gym.',
    score: 4.3,
    review_count: 60,
    price_text: '$499.99',
    estimate_revenue: 29999.4,
    url: 'https://example.com/product-four',
  },
  {
    id: 5,
    name: 'Product Five',
    category: 'Books',
    sub_category: 'Fiction',
    desc: 'An engaging fiction novel that keeps you hooked.',
    score: 4.8,
    review_count: 300,
    price_text: '$19.99',
    estimate_revenue: 59997.0,
    url: 'https://example.com/product-five',
  },
  // 继续添加更多数据以供测试
];

export default exampleData;
