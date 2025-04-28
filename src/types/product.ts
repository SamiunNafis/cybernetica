export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  features?: string[];
}

export interface FilterOption {
  value: string;
  label: string;
  count: number;
}

export interface ActiveFilters {
  categories: string[];
  priceRanges: string[];
  features: string[];
}