export interface Tier {
  name: string;
  id: 'starter' | 'pro' | 'advanced';
  icon: string;
  description: string;
  features: string[];
  featured: boolean;
  priceId: Record<string, string>;
}

// export const PricingTier: Tier[] = [
//   {
//     name: 'Mobile',
//     id: 'starter',
//     icon: '/assets/icons/price-tiers/free-icon.svg',
//     description: 'Ideal for individuals who want to get started with simple design tasks.',
//     features: ['1 workspace', 'Limited collaboration', 'Export to PNG and SVG'],
//     featured: false,
//     priceId: { month: 'pri_01j945hntx796kb2m4nzm6qcsj', year: 'pri_01j945jd3tvw25wr8rz74zvh95' },
//   },
//   {
//     name: 'Super',
//     id: 'pro',
//     icon: '/assets/icons/price-tiers/basic-icon.svg',
//     description: 'Enhanced design tools for scaling teams who need more flexibility.',
//     features: ['Integrations', 'Unlimited workspaces', 'Advanced editing tools', 'Everything in Starter'],
//     featured: true,
//     priceId: { month: 'pri_01j945kg2f4w8et55vt4f5vk7c', year: 'pri_01j945kzdbkv71rqww053z3gcw' },
//   },
//   {
//     name: 'Premium',
//     id: 'advanced',
//     icon: '/assets/icons/price-tiers/pro-icon.svg',
//     description: 'Powerful tools designed for extensive collaboration and customization.',
//     features: [
//       'Single sign on (SSO)',
//       'Advanced version control',
//       'Assets library',
//       'Guest accounts',
//       'Everything in Pro',
//     ],
//     featured: false,
//     priceId: { month: 'pri_01j945mx518vzm9t5rc2sedjw5', year: 'pri_01j945nb66s6qen2jxafbbgsbg' },
//   },
// ];

export const PricingTier: Tier[] = [
  {
    name: 'Monthly',
    id: 'pro',
    icon: '/assets/icons/price-tiers/basic-icon.svg',
    description: 'Enhanced design tools for scaling teams who need more flexibility.',
    features: ['Integrations', 'Unlimited workspaces', 'Advanced editing tools', 'Everything in Starter'],
    featured: false,
    priceId: { month: 'pri_01j9nqtqvrb466cgqaztwpre48', year: 'pri_01j9nqtqvrb466cgqaztwpre48' },
  },
  {
    name: 'Life Time',
    id: 'advanced',
    icon: '/assets/icons/price-tiers/pro-icon.svg',
    description: 'Powerful tools designed for extensive collaboration and customization.',
    features: [
      'Single sign on (SSO)',
      'Advanced version control',
      'Assets library',
      'Guest accounts',
      'Everything in Pro',
    ],
    featured: true,
    priceId: { month: 'pri_01j9nqvh60r3k6axjm9h8q7c0v', year: 'pri_01j9nqvh60r3k6axjm9h8q7c0v' },
  },
];
