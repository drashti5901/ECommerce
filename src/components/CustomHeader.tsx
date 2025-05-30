import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/colors';
import { wp, hp, fs, metrics } from '../utils/responsive';

interface CustomHeaderProps {
  title: string;
  showBack?: boolean;
  rightComponent?: React.ReactNode;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBack = true,
  rightComponent,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.background.primary}
        translucent
      />
      <View style={styles.content}>
        <View style={styles.leftContainer}>
          {showBack && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>

        <View style={styles.rightContainer}>
          {rightComponent || <View style={styles.placeholder} />}
        </View>
      </View>
    </View>
  );
};

const HEADER_HEIGHT = Platform.select({
  ios: hp(44),
  android: hp(56),
  default: hp(56),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background.primary,
    paddingTop: Platform.OS === 'ios' ? hp(47) : StatusBar.currentHeight,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border.light,
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
  content: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.medium,
  },
  leftContainer: {
    width: wp(60),
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: wp(60),
    alignItems: 'flex-end',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: fs(18),
    fontWeight: '600',
    color: COLORS.text.primary,
  },
  backButton: {
    padding: metrics.small,
    marginLeft: -metrics.small,
  },
  backButtonText: {
    fontSize: fs(24),
    color: COLORS.text.primary,
  },
  placeholder: {
    width: wp(24),
  },
});

export default CustomHeader; 