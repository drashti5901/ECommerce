import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { SCREENS } from '../../navigation/constants';
import {
  fetchProductById,
  addToWishlist,
  removeFromWishlist,
} from '../../redux/features/product/productSlice';
import {
  selectSelectedProduct,
  selectProductLoading,
  selectProductError,
  selectIsInWishlist,
} from '../../redux/features/product/selectors';
import { AppDispatch, RootState } from '../../redux/store';
import { Product } from '../../services';
import { styles } from './styles';
import InquiryForm from '../../components/InquiryForm';
import CustomHeader from '../../components/CustomHeader';
import { STRINGS } from '../../constants/strings';

type ProductDetailScreenProps = {
  route: RouteProp<RootStackParamList, typeof SCREENS.PRODUCT_DETAIL>;
  navigation: StackNavigationProp<RootStackParamList, typeof SCREENS.PRODUCT_DETAIL>;
};

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ProductDetailScreen = ({ route, navigation }: ProductDetailScreenProps) => {
  const { productId } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector(selectSelectedProduct) as Product | null;
  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError) as string | null;
  const isInWishlist = useSelector((state: RootState) => selectIsInWishlist(state, productId));
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  useEffect(() => {
    dispatch(fetchProductById({ productId }));
  }, [dispatch, productId]);

  const handleWishlistToggle = () => {
    if (!product) return;
    
    if (isInWishlist) {
      dispatch(removeFromWishlist({ product }));
    } else {
      dispatch(addToWishlist({ product }));
    }
  };

  const handleInquirySubmit = (values: FormValues) => {
    // Here you would typically send the inquiry to your backend
    console.log('Inquiry submitted:', values);
    Alert.alert(
      STRINGS.ALERTS.INQUIRY_SUBMITTED.TITLE,
      STRINGS.ALERTS.INQUIRY_SUBMITTED.MESSAGE,
      [{ text: STRINGS.ALERTS.INQUIRY_SUBMITTED.OK, onPress: () => setShowInquiryForm(false) }]
    );
  };

  const renderWishlistButton = () => (
    <TouchableOpacity onPress={handleWishlistToggle}>
      <Text style={styles.wishlistHeaderButton}>
        {isInWishlist ? '❤️' : '🤍'}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <>
        <CustomHeader title="Product Details" />
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <CustomHeader title="Product Details" />
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error || 'Product not found'}</Text>
          <TouchableOpacity 
            onPress={() => dispatch(fetchProductById({ productId }))} 
            style={styles.retryButton}
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  return (
    <>
      <CustomHeader
        title={product.title}
        rightComponent={renderWishlistButton()}
      />
      <ScrollView style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>⭐ {product.rating.rate}</Text>
            <Text style={styles.ratingCount}>({product.rating.count} reviews)</Text>
          </View>

          <Text style={styles.categoryLabel}>Category</Text>
          <Text style={styles.category}>{product.category}</Text>

          <Text style={styles.descriptionLabel}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.wishlistButton,
                isInWishlist ? styles.wishlistButtonActive : null,
              ]}
              onPress={handleWishlistToggle}
            >
              <Text style={[
                styles.wishlistButtonText,
                isInWishlist ? styles.wishlistButtonTextActive : null,
              ]}>
                {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.inquiryButton}
              onPress={() => setShowInquiryForm(true)}
            >
              <Text style={styles.inquiryButtonText}>Make an Inquiry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={showInquiryForm}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowInquiryForm(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowInquiryForm(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <InquiryForm
              productName={product.title}
              onSubmit={handleInquirySubmit}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProductDetailScreen; 