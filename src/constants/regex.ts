import { STRINGS } from './strings';

export const REGEX = {
  // Name: Letters, spaces, and hyphens, 2-50 characters
  NAME: /^[a-zA-Z\s-]{2,50}$/,
  
  // Email: Standard email format
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  
  // Phone: 10 digits, optional country code with +, optional spaces and hyphens
  PHONE: /^(\+?\d{1,3}[-.\s]?)?\d{10}$/,
  
  // Message: Any characters, minimum 10, maximum 500
  MESSAGE: /^[\s\S]{10,500}$/,
} as const;

export const REGEX_ERROR_MESSAGES = {
  NAME: {
    pattern: STRINGS.VALIDATION.NAME.PATTERN,
    min: STRINGS.VALIDATION.NAME.MIN,
    max: STRINGS.VALIDATION.NAME.MAX,
    required: STRINGS.VALIDATION.NAME.REQUIRED,
  },
  EMAIL: {
    pattern: STRINGS.VALIDATION.EMAIL.PATTERN,
    required: STRINGS.VALIDATION.EMAIL.REQUIRED,
  },
  PHONE: {
    pattern: STRINGS.VALIDATION.PHONE.PATTERN,
    required: STRINGS.VALIDATION.PHONE.REQUIRED,
  },
  MESSAGE: {
    min: STRINGS.VALIDATION.MESSAGE.MIN,
    max: STRINGS.VALIDATION.MESSAGE.MAX,
    required: STRINGS.VALIDATION.MESSAGE.REQUIRED,
  },
} as const; 