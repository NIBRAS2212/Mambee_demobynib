export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  weight: string;
  benefits: string[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Order {
  id: string;
  items: { productId: string; quantity: number }[];
  customerName: string;
  email: string;
  address: string;
  total: number;
}
