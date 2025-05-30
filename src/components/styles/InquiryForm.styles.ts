import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { hp, fs, metrics } from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
    borderTopLeftRadius: metrics.borderRadiusLarge,
    borderTopRightRadius: metrics.borderRadiusLarge,
  },
  title: {
    fontSize: fs(24),
    fontWeight: '600',
    color: COLORS.text.primary,
    textAlign: 'center',
    marginVertical: metrics.large,
  },
  formContainer: {
    padding: metrics.medium,
  },
  inputContainer: {
    marginBottom: metrics.medium,
  },
  label: {
    fontSize: fs(16),
    fontWeight: '500',
    color: COLORS.text.primary,
    marginBottom: metrics.tiny,
  },
  input: {
    height: hp(48),
    backgroundColor: COLORS.background.secondary,
    borderRadius: metrics.borderRadiusSmall,
    paddingHorizontal: metrics.medium,
    fontSize: fs(16),
    color: COLORS.text.primary,
  },
  messageInput: {
    height: hp(120),
    paddingTop: metrics.medium,
  },
  inputError: {
    borderWidth: 1,
    borderColor: COLORS.status.error,
  },
  errorText: {
    color: COLORS.status.error,
    fontSize: fs(12),
    marginTop: metrics.tiny,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: metrics.medium,
    borderRadius: metrics.borderRadiusSmall,
    marginTop: metrics.medium,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    color: COLORS.text.light,
    fontSize: fs(16),
    fontWeight: '600',
    textAlign: 'center',
  },
}); 