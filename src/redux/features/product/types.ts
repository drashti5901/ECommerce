import { Product } from '../../../services';

export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  wishlist: Product[];
  loading: boolean;
  error: string | null;
}

export interface FetchProductByIdPayload {
  productId: number;
}

export interface WishlistActionPayload {
  product: Product;
} 