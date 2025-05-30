import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../services';
import { ProductState, FetchProductByIdPayload, WishlistActionPayload } from './types';

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  wishlist: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Fetch all products
    fetchProducts: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Fetch single product
    fetchProductById: (state, _action: PayloadAction<FetchProductByIdPayload>) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductByIdSuccess: (state, action: PayloadAction<Product>) => {
      state.loading = false;
      state.selectedProduct = action.payload;
    },
    fetchProductByIdFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Wishlist actions
    addToWishlist: (state, action: PayloadAction<WishlistActionPayload>) => {
      const exists = state.wishlist.some(item => item.id === action.payload.product.id);
      if (!exists) {
        state.wishlist.push(action.payload.product);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<WishlistActionPayload>) => {
      state.wishlist = state.wishlist.filter(
        item => item.id !== action.payload.product.id
      );
    },
  },
});

export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductById,
  fetchProductByIdSuccess,
  fetchProductByIdFailure,
  addToWishlist,
  removeFromWishlist,
} = productSlice.actions;

export default productSlice.reducer; 