import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { COLORS } from '../constants/colors';
import { REGEX, REGEX_ERROR_MESSAGES } from '../constants/regex';
import { STRINGS } from '../constants/strings';
import { styles } from './styles/InquiryForm.styles';

// Validation schema using regex patterns
const InquirySchema = Yup.object().shape({
  name: Yup.string()
    .matches(REGEX.NAME, REGEX_ERROR_MESSAGES.NAME.pattern)
    .required(REGEX_ERROR_MESSAGES.NAME.required),
  email: Yup.string()
    .matches(REGEX.EMAIL, REGEX_ERROR_MESSAGES.EMAIL.pattern)
    .required(REGEX_ERROR_MESSAGES.EMAIL.required),
  phone: Yup.string()
    .matches(REGEX.PHONE, REGEX_ERROR_MESSAGES.PHONE.pattern)
    .required(REGEX_ERROR_MESSAGES.PHONE.required),
  message: Yup.string()
    .matches(REGEX.MESSAGE, {
      message: ({ value }) => {
        if (!value) return REGEX_ERROR_MESSAGES.MESSAGE.required;
        if (value.length < 10) return REGEX_ERROR_MESSAGES.MESSAGE.min;
        if (value.length > 500) return REGEX_ERROR_MESSAGES.MESSAGE.max;
        return '';
      },
    })
    .required(REGEX_ERROR_MESSAGES.MESSAGE.required),
});

interface InquiryFormProps {
  productName: string;
  onSubmit: (values: FormValues) => void;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const InquiryForm = ({ productName, onSubmit }: InquiryFormProps) => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    message: STRINGS.FORM.MESSAGES.INTEREST(productName),
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{STRINGS.FORM.TITLES.PRODUCT_INQUIRY}</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={InquirySchema}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
            dirty,
          }) => (
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>{STRINGS.FORM.LABELS.NAME}</Text>
                <TextInput
                  style={[
                    styles.input,
                    touched.name && errors.name && styles.inputError,
                  ]}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder={STRINGS.FORM.PLACEHOLDERS.NAME}
                  placeholderTextColor={COLORS.text.secondary}
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>{STRINGS.FORM.LABELS.EMAIL}</Text>
                <TextInput
                  style={[
                    styles.input,
                    touched.email && errors.email && styles.inputError,
                  ]}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder={STRINGS.FORM.PLACEHOLDERS.EMAIL}
                  placeholderTextColor={COLORS.text.secondary}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>{STRINGS.FORM.LABELS.PHONE}</Text>
                <TextInput
                  style={[
                    styles.input,
                    touched.phone && errors.phone && styles.inputError,
                  ]}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  placeholder={STRINGS.FORM.PLACEHOLDERS.PHONE}
                  placeholderTextColor={COLORS.text.secondary}
                  keyboardType="phone-pad"
                />
                {touched.phone && errors.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>{STRINGS.FORM.LABELS.MESSAGE}</Text>
                <TextInput
                  style={[
                    styles.input,
                    styles.messageInput,
                    touched.message && errors.message && styles.inputError,
                  ]}
                  onChangeText={handleChange('message')}
                  onBlur={handleBlur('message')}
                  value={values.message}
                  placeholder={STRINGS.FORM.PLACEHOLDERS.MESSAGE}
                  placeholderTextColor={COLORS.text.secondary}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                />
                {touched.message && errors.message && (
                  <Text style={styles.errorText}>{errors.message}</Text>
                )}
              </View>

              <TouchableOpacity
                style={[
                  styles.submitButton,
                  (!isValid || !dirty) && styles.submitButtonDisabled,
                ]}
                onPress={() => handleSubmit()}
                disabled={!isValid || !dirty}
              >
                <Text style={styles.submitButtonText}>
                  {STRINGS.FORM.BUTTONS.SUBMIT}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InquiryForm; 