export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  spicy?: number;
  vegetarian?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}
