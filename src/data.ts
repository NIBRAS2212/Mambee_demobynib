import { Product, Review } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wild Forest Honey',
    price: 15.99,
    description: 'Directly sourced from the deep forests, this honey is rich in antioxidants and has a distinct woody flavor.',
    image: 'https://mambeestore.com/cdn/shop/files/Product1.jpg?v=1700000000', // Placeholder using the site's structure
    category: 'Pure Honey',
    weight: '500g',
    benefits: ['Boosts Immunity', 'Rich in Minerals', 'Natural Sweetener']
  },
  {
    id: '2',
    name: 'Small Bee Honey',
    price: 24.99,
    description: 'Rare and highly medicinal honey produced by small bees. Known for its unique sweet and sour taste.',
    image: 'https://mambeestore.com/cdn/shop/files/Product2.jpg?v=1700000000',
    category: 'Medicinal',
    weight: '250g',
    benefits: ['Wound Healing', 'Cough Relief', 'Anti-inflammatory']
  },
  {
    id: '3',
    name: 'Moringa Honey',
    price: 18.99,
    description: 'Honey infused with the goodness of Moringa. A superfood combo for your daily health.',
    image: 'https://mambeestore.com/cdn/shop/files/Product3.jpg?v=1700000000',
    category: 'Infused',
    weight: '500g',
    benefits: ['Energy Booster', 'Skin Health', 'Detoxification']
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    userName: 'Sarah J.',
    rating: 5,
    comment: 'The taste is so authentic! You can really tell the difference from supermarket honey.',
    date: '2024-03-10'
  },
  {
    id: 'r2',
    userName: 'Michael R.',
    rating: 4,
    comment: 'Great quality honey. The packaging was also very secure.',
    date: '2024-03-05'
  }
];
