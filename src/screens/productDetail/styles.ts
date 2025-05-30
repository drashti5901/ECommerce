import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { wp, hp, sp, fs, metrics, getShadow } from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  productImage: {
    width: '100%',
    height: hp(300),
    resizeMode: 'contain',
    backgroundColor: COLORS.background.primary,
  },
  contentContainer: {
    padding: metrics.medium,
  },
  title: {
    fontSize: fs(24),
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: metrics.small,
  },
  price: {
    fontSize: fs(28),
    fontWeight: '700',
    color: COLORS.secondary,
    marginBottom: metrics.medium,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: metrics.medium,
  },
  ratingText: {
    fontSize: fs(16),
    color: COLORS.rating.star,
    marginRight: metrics.small,
  },
  ratingCount: {
    fontSize: fs(16),
    color: COLORS.text.secondary,
  },
  categoryLabel: {
    fontSize: fs(18),
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: metrics.tiny,
  },
  category: {
    fontSize: fs(16),
    color: COLORS.text.secondary,
    textTransform: 'capitalize',
    marginBottom: metrics.medium,
  },
  descriptionLabel: {
    fontSize: fs(18),
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: metrics.tiny,
  },
  description: {
    fontSize: fs(16),
    color: COLORS.text.secondary,
    lineHeight: hp(24),
    marginBottom: metrics.large,
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
  buttonContainer: {
    gap: metrics.medium,
  },
  wishlistButton: {
    backgroundColor: COLORS.background.primary,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: metrics.borderRadiusSmall,
    paddingVertical: metrics.medium,
    paddingHorizontal: metrics.large,
    alignItems: 'center',
  },
  wishlistButtonActive: {
    backgroundColor: COLORS.primary,
  },
  wishlistButtonText: {
    fontSize: fs(16),
    fontWeight: '600',
    color: COLORS.primary,
  },
  wishlistButtonTextActive: {
    color: COLORS.text.light,
  },
  wishlistHeaderButton: {
    fontSize: fs(24),
    padding: metrics.tiny,
  },
  inquiryButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: metrics.borderRadiusSmall,
    paddingVertical: metrics.medium,
    paddingHorizontal: metrics.large,
    alignItems: 'center',
  },
  inquiryButtonText: {
    color: COLORS.text.light,
    fontSize: fs(16),
    fontWeight: '600',
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
    maxHeight: '90%',
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: metrics.medium,
    right: metrics.medium,
    zIndex: 1,
    padding: metrics.small,
  },
  closeButtonText: {
    fontSize: fs(24),
    color: COLORS.text.secondary,
  },
}); 