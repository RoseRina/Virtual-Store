export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  stock: number;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  discount?: number;
  imageUrl: string;
  category: string;
  stock: number;
} 