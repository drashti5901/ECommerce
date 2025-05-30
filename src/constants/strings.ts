export const STRINGS = {
  FORM: {
    TITLES: {
      PRODUCT_INQUIRY: 'Product Inquiry',
    },
    LABELS: {
      NAME: 'Name',
      EMAIL: 'Email',
      PHONE: 'Phone',
      MESSAGE: 'Message',
    },
    PLACEHOLDERS: {
      NAME: 'Enter your name',
      EMAIL: 'Enter your email',
      PHONE: 'Enter your phone number',
      MESSAGE: 'Enter your message',
    },
    BUTTONS: {
      SUBMIT: 'Submit Inquiry',
    },
    MESSAGES: {
      INTEREST: (productName: string) => 
        `I am interested in ${productName}. Please provide more information.`,
    },
  },
  ALERTS: {
    INQUIRY_SUBMITTED: {
      TITLE: 'Inquiry Submitted',
      MESSAGE: 'Thank you for your inquiry. We will get back to you soon.',
      OK: 'OK',
    },
  },
  VALIDATION: {
    NAME: {
      PATTERN: 'Name can only contain letters, spaces, and hyphens',
      MIN: 'Name must be at least 2 characters',
      MAX: 'Name cannot exceed 50 characters',
      REQUIRED: 'Name is required',
    },
    EMAIL: {
      PATTERN: 'Please enter a valid email address',
      REQUIRED: 'Email is required',
    },
    PHONE: {
      PATTERN: 'Please enter a valid 10-digit phone number',
      REQUIRED: 'Phone number is required',
    },
    MESSAGE: {
      MIN: 'Message must be at least 10 characters',
      MAX: 'Message cannot exceed 500 characters',
      REQUIRED: 'Message is required',
    },
  },
} as const; 