import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { SCREENS } from '../../navigation/constants';
import { removeFromWishlist } from '../../redux/features/product/productSlice';
import { selectWishlistProducts } from '../../redux/features/product/selectors';
import { AppDispatch } from '../../redux/store';
import { Product } from '../../services';
import { styles } from './styles';
import CustomHeader from '../../components/CustomHeader';

const WishlistScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const wishlistProducts = useSelector(selectWishlistProducts);

  const handleProductPress = (productId: number) => {
    navigation.navigate(SCREENS.PRODUCT_DETAIL, { productId });
  };

  const handleRemoveFromWishlist = (product: Product) => {
    dispatch(removeFromWishlist({ product }));
  };

  if (wishlistProducts.length === 0) {
    return (
      <>
        <CustomHeader title="My Wishlist" />
        <View style={styles.centerContainer}>
          <Text style={styles.emptyText}>Your wishlist is empty</Text>
          <TouchableOpacity
            style={styles.browseButton}
            onPress={() => navigation.navigate(SCREENS.PRODUCT_LIST)}
          >
            <Text style={styles.browseButtonText}>Browse Products</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  return (
    <>
      <CustomHeader title="My Wishlist" />
      <FlatList
        data={wishlistProducts}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => handleProductPress(item.id)}
          >
            <View style={styles.productInfo}>
              <Text style={styles.productTitle} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>⭐ {item.rating.rate}</Text>
                <Text style={styles.ratingCount}>({item.rating.count})</Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveFromWishlist(item)}
              >
                <Text style={styles.removeButtonText}>Remove from Wishlist</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </>
  );
};

export default WishlistScreen; 