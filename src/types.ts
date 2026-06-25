export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  imageUrl: string;
  category: 'Starters' | 'Main Course' | 'Desserts' | 'Drinks';
  isSpecial: boolean;
}

export interface TableBooking {
  customerName: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  specialRequest: string;
}

export interface CallRequest {
  name: string;
  phone: string;
  email: string;
  date: string;
  message: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}
