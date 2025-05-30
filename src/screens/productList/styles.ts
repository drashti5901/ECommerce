import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../constants/colors';
import { wp, hp, sp, fs, metrics, getShadow } from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.secondary,
  },
  headerButton: {
    paddingHorizontal: wp(15),
    paddingVertical: hp(5),
  },
  headerButtonText: {
    fontSize: fs(24),
    color: COLORS.error,
  },
  searchContainer: {
    padding: metrics.medium,
    backgroundColor: COLORS.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border.light,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: metrics.medium,
  },
  searchInput: {
    flex: 1,
    height: hp(40),
    backgroundColor: COLORS.background.secondary,
    borderRadius: metrics.borderRadiusSmall,
    paddingHorizontal: metrics.medium,
    fontSize: fs(16),
    color: COLORS.text.primary,
  },
  suggestionsContainer: {
    backgroundColor: COLORS.background.primary,
    borderRadius: metrics.borderRadiusSmall,
    marginTop: metrics.small,
    ...getShadow(2),
  },
  suggestionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border.light,
  },
  suggestionTitle: {
    flex: 1,
    fontSize: fs(14),
    color: COLORS.text.primary,
    marginRight: metrics.medium,
  },
  suggestionPrice: {
    fontSize: fs(14),
    fontWeight: '600',
    color: COLORS.secondary,
  },
  filterButton: {
    padding: metrics.small,
    borderRadius: metrics.borderRadiusSmall,
    backgroundColor: COLORS.primary,
  },
  filterButtonText: {
    color: COLORS.text.light,
    fontSize: fs(16),
    fontWeight: '600',
  },
  filterBadge: {
    position: 'absolute',
    top: hp(-5),
    right: wp(-5),
    backgroundColor: COLORS.error,
    borderRadius: wp(10),
    width: wp(20),
    height: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterBadgeText: {
    color: COLORS.text.light,
    fontSize: fs(12),
    fontWeight: '600',
  },
  productCard: {
    backgroundColor: COLORS.background.primary,
    borderRadius: metrics.borderRadiusMedium,
    margin: metrics.small,
    padding: metrics.medium,
    ...getShadow(3),
  },
  productCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: metrics.medium,
  },
  productImage: {
    width: wp(80),
    height: hp(80),
    resizeMode: 'contain',
    backgroundColor: COLORS.background.secondary,
    borderRadius: metrics.borderRadiusSmall,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: fs(16),
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: metrics.small,
  },
  productPrice: {
    fontSize: fs(18),
    fontWeight: '700',
    color: COLORS.secondary,
    marginBottom: metrics.small,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: fs(14),
    color: COLORS.rating.star,
    marginRight: metrics.small,
  },
  ratingCount: {
    fontSize: fs(14),
    color: COLORS.text.secondary,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: COLORS.status.error,
    fontSize: fs(16),
    marginBottom: metrics.medium,
  },
  retryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: metrics.large,
    paddingVertical: metrics.small,
    borderRadius: metrics.borderRadiusSmall,
  },
  retryButtonText: {
    color: COLORS.text.light,
    fontSize: fs(16),
    fontWeight: '600',
  },
  listContainer: {
    padding: metrics.medium,
  },
  noResultsText: {
    fontSize: fs(16),
    color: COLORS.text.secondary,
    textAlign: 'center',
    padding: metrics.large,
  },
  wishlistHeaderButton: {
    padding: metrics.small,
  },
  wishlistHeaderButtonText: {
    fontSize: fs(24),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.overlay.dark,
  },
  modalContent: {
    backgroundColor: COLORS.background.primary,
    borderTopLeftRadius: metrics.borderRadiusLarge,
    borderTopRightRadius: metrics.borderRadiusLarge,
    padding: metrics.large,
  },
  modalTitle: {
    fontSize: fs(20),
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: metrics.large,
    textAlign: 'center',
  },
  filterSection: {
    marginBottom: metrics.large,
  },
  filterLabel: {
    fontSize: fs(16),
    fontWeight: '500',
    color: COLORS.text.primary,
    marginBottom: metrics.small,
  },
  priceSliderContainer: {
    marginBottom: metrics.small,
  },
  slider: {
    width: '100%',
    height: hp(40),
    marginBottom: metrics.small,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: metrics.medium,
  },
  modalButton: {
    flex: 1,
    paddingVertical: metrics.medium,
    borderRadius: metrics.borderRadiusSmall,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: COLORS.background.secondary,
  },
  resetButtonText: {
    color: COLORS.text.primary,
    fontSize: fs(16),
    fontWeight: '600',
  },
  applyButton: {
    backgroundColor: COLORS.primary,
  },
  applyButtonText: {
    color: COLORS.text.light,
    fontSize: fs(16),
    fontWeight: '600',
  },
}); 