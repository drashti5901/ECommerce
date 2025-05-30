import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TextInput,
  Image
} from 'react-native';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { SCREENS } from '../../navigation/constants';
import {
  fetchProducts,
} from '../../redux/features/product/productSlice';
import {
  selectProducts,
  selectProductLoading,
  selectProductError,
} from '../../redux/features/product/selectors';
import { AppDispatch } from '../../redux/store';
import { Product } from '../../services';
import { styles } from './styles';
import CustomHeader from '../../components/CustomHeader';
import debounce from 'lodash/debounce';

interface FilterState {
  minPrice: number;
  maxPrice: number;
  minRating: number;
}

const ProductListScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
  });
  const [activeFilters, setActiveFilters] = useState<FilterState | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductPress = (productId: number) => {
    navigation.navigate(SCREENS.PRODUCT_DETAIL, { productId });
  };

  const debouncedSearch = useCallback(
    debounce((text: string) => {
      setSearchQuery(text);
      setShowSuggestions(!!text);
    }, 300),
    []
  );

  const handleSearchChange = (text: string) => {
    debouncedSearch(text);
  };

  const handleSuggestionPress = (product: Product) => {
    setSearchQuery(product.title);
    setShowSuggestions(false);
    handleProductPress(product.id);
  };

  const renderWishlistButton = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREENS.WISHLIST)}
      style={styles.wishlistHeaderButton}
    >
      <Text style={styles.wishlistHeaderButtonText}>❤️</Text>
    </TouchableOpacity>
  );

  const renderFilterButton = () => (
    <TouchableOpacity
      style={styles.filterButton}
      onPress={() => setShowFilters(true)}
    >
      <Text style={styles.filterButtonText}>
        {activeFilters ? '🔍 Filtered' : '🔍 Filter'}
      </Text>
    </TouchableOpacity>
  );

  const handleApplyFilters = () => {
    setActiveFilters(filters);
    setShowFilters(false);
  };

  const handleResetFilters = () => {
    const defaultFilters = {
      minPrice: 0,
      maxPrice: 1000,
      minRating: 0,
    };
    setFilters(defaultFilters);
    setActiveFilters(null);
    setShowFilters(false);
  };

  const filteredAndSearchedProducts = useMemo(() => {
    let result = products;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Apply price and rating filters
    if (activeFilters) {
      result = result.filter(
        product =>
          product.price >= activeFilters.minPrice &&
          product.price <= activeFilters.maxPrice &&
          product.rating.rate >= activeFilters.minRating
      );
    }

    return result;
  }, [products, searchQuery, activeFilters]);

  const suggestions = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return products
      .filter(product => 
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      )
      .slice(0, 5); // Limit to 5 suggestions
  }, [products, searchQuery]);

  if (loading) {
    return (
      <>
        <CustomHeader title="Products" showBack={false} />
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </>
    );
  }

  if (error) {
    return (
      <>
        <CustomHeader title="Products" showBack={false} />
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => dispatch(fetchProducts())}
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
        title="Products"
        showBack={false}
        rightComponent={renderWishlistButton()}
      />
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            onChangeText={handleSearchChange}
            defaultValue={searchQuery}
          />
          {renderFilterButton()}
        </View>
        {showSuggestions && suggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            {suggestions.map((suggestion) => (
              <TouchableOpacity
                key={suggestion.id}
                style={styles.suggestionItem}
                onPress={() => handleSuggestionPress(suggestion)}
              >
                <Text style={styles.suggestionTitle} numberOfLines={1}>
                  {suggestion.title}
                </Text>
                <Text style={styles.suggestionPrice}>
                  ${suggestion.price.toFixed(2)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <FlatList
        data={filteredAndSearchedProducts}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => handleProductPress(item.id)}
          >
            <View style={styles.productCardContent}>
              <Image 
                source={{ uri: item.image }} 
                style={styles.productImage}
                resizeMode="contain"
              />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>⭐ {item.rating.rate}</Text>
                  <Text style={styles.ratingCount}>({item.rating.count})</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.noResultsText}>
            {searchQuery
              ? 'No products match your search'
              : 'No products match your filters'}
          </Text>
        }
      />

      <Modal
        visible={showFilters}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowFilters(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Products</Text>

            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>
                Price Range: ${filters.minPrice.toFixed(0)} - ${filters.maxPrice.toFixed(0)}
              </Text>
              <View style={styles.priceSliderContainer}>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={1000}
                  value={filters.minPrice}
                  onValueChange={(value) =>
                    setFilters({ ...filters, minPrice: value })
                  }
                />
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={1000}
                  value={filters.maxPrice}
                  onValueChange={(value) =>
                    setFilters({ ...filters, maxPrice: value })
                  }
                />
              </View>
            </View>

            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>
                Minimum Rating: {filters.minRating.toFixed(1)}⭐
              </Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={5}
                step={0.5}
                value={filters.minRating}
                onValueChange={(value) =>
                  setFilters({ ...filters, minRating: value })
                }
              />
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.resetButton]}
                onPress={handleResetFilters}
              >
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.applyButton]}
                onPress={handleApplyFilters}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProductListScreen; 