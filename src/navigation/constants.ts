export const SCREENS = {
  PRODUCT_LIST: 'ProductList' as const,
  PRODUCT_DETAIL: 'ProductDetail' as const,
  WISHLIST: 'Wishlist' as const,
} as const;

// Type for screen names
export type ScreenNames = typeof SCREENS[keyof typeof SCREENS]; 