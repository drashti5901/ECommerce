import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Product } from '../../../services';
import { ProductState } from './types';

// Base selector
const selectProductState = (state: RootState) => state.product;

// Simple selectors
export const selectProducts = (state: RootState) => state.product.products;
export const selectProductLoading = (state: RootState) => state.product.loading;
export const selectProductError = (state: RootState) => state.product.error;
export const selectSelectedProduct = (state: RootState) => state.product.selectedProduct;

// Memoized selectors
export const selectWishlist = createSelector(
  selectProductState,
  (state: ProductState) => state.wishlist
);

export const selectWishlistProducts = createSelector(
  selectWishlist,
  (wishlist: Product[]) => wishlist
);

export const selectIsInWishlist = createSelector(
  [selectWishlist, (_state: RootState, productId: number) => productId],
  (wishlist: Product[], productId: number) => wishlist.some(item => item.id === productId)
); 