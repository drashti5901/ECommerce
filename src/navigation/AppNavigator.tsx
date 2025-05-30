import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from './constants';
import ProductListScreen from '../screens/productList/ProductListScreen';
import ProductDetailScreen from '../screens/productDetail/ProductDetailScreen';
import WishlistScreen from '../screens/wishlist/WishlistScreen';

export type RootStackParamList = {
  [SCREENS.PRODUCT_LIST]: undefined;
  [SCREENS.PRODUCT_DETAIL]: { productId: number };
  [SCREENS.WISHLIST]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null, // Hide the default header
      }}
    >
      <Stack.Screen
        name={SCREENS.PRODUCT_LIST}
        component={ProductListScreen}
      />
      <Stack.Screen
        name={SCREENS.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name={SCREENS.WISHLIST}
        component={WishlistScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator; 