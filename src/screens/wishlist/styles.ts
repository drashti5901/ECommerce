import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../constants/colors';
import { wp, hp, sp, fs, metrics, getShadow } from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  listContainer: {
    padding: metrics.medium,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background.primary,
  },
  productCard: {
    backgroundColor: COLORS.background.secondary,
    borderRadius: metrics.borderRadiusSmall,
    padding: metrics.medium,
    marginBottom: metrics.medium,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  productContent: {
    flexDirection: 'row',
    padding: metrics.medium,
  },
  productImage: {
    width: wp(100),
    height: wp(100),
    resizeMode: 'contain',
    backgroundColor: COLORS.background.primary,
    borderRadius: metrics.borderRadiusSmall,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: fs(16),
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: metrics.tiny,
  },
  productPrice: {
    fontSize: fs(18),
    fontWeight: '700',
    color: COLORS.secondary,
    marginBottom: metrics.tiny,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: metrics.small,
  },
  ratingText: {
    fontSize: fs(14),
    color: COLORS.rating.star,
    marginRight: metrics.tiny,
  },
  ratingCount: {
    fontSize: fs(14),
    color: COLORS.text.secondary,
  },
  removeButton: {
    backgroundColor: COLORS.status.error,
    borderRadius: metrics.borderRadiusSmall,
    paddingVertical: metrics.small,
    paddingHorizontal: metrics.medium,
    alignItems: 'center',
    marginTop: metrics.small,
  },
  removeButtonText: {
    color: COLORS.text.light,
    fontSize: fs(14),
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.large,
  },
  emptyText: {
    fontSize: fs(16),
    color: COLORS.text.secondary,
    marginBottom: metrics.large,
  },
  browseButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: metrics.large,
    paddingVertical: metrics.medium,
    borderRadius: metrics.borderRadiusSmall,
  },
  browseButtonText: {
    color: COLORS.text.light,
    fontSize: fs(16),
    fontWeight: '600',
  },
}); 