import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


const baseWidth = 375;
const baseHeight = 812

// Scaling factors
const widthScale = SCREEN_WIDTH / baseWidth;
const heightScale = SCREEN_HEIGHT / baseHeight;
const moderateScale = Math.min(widthScale, heightScale);

export const metrics = {
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
  
  // Spacing
  tiny: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 48,

  // Border radius
  borderRadiusTiny: 4,
  borderRadiusSmall: 8,
  borderRadiusMedium: 12,
  borderRadiusLarge: 16,
  borderRadiusXLarge: 24,

  // Icon sizes
  iconTiny: 16,
  iconSmall: 20,
  iconMedium: 24,
  iconLarge: 32,
  iconXLarge: 40,
};

/**
 * Scale a width dimension
 * @param size - Size to scale
 */
export const wp = (size: number): number => {
  return PixelRatio.roundToNearestPixel(size * widthScale);
};

/**
 * Scale a height dimension
 * @param size - Size to scale
 */
export const hp = (size: number): number => {
  return PixelRatio.roundToNearestPixel(size * heightScale);
};

/**
 * Scale a size for both width and height proportionally
 * @param size - Size to scale
 */
export const sp = (size: number): number => {
  return PixelRatio.roundToNearestPixel(size * moderateScale);
};

/**
 * Scale font size
 * @param size - Font size to scale
 */
export const fs = (size: number): number => {
  const newSize = size * moderateScale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

/**
 * Get platform-specific shadow styles
 */
export const getShadow = (elevation: number) => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: elevation,
      },
      shadowOpacity: 0.1 + elevation * 0.03,
      shadowRadius: elevation * 0.8,
    };
  }
  return {
    elevation: elevation,
  };
};

// Device type detection
export const isSmallDevice = SCREEN_HEIGHT < 700;
export const isTablet = SCREEN_WIDTH >= 768; 