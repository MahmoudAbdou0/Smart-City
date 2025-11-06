export const validations = {
  fullName: {
    required: "Full Name is required",
    minLength: { value: 3, message: "Must be at least 3 characters" },
  },

  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email address",
    },
  },

  phone: {
    required: "Phone number is required",
    pattern: {
      value: /^(01[0-2,5]{1}[0-9]{8})$/,
      message: "Invalid Egyptian phone number",
    },
  },

  address: {
    required: "Address is required",
    minLength: { value: 3, message: "Must be at least 3 characters" },
    maxLength: { value: 100, message: "Must be less than 100" },
  },

  nationalID: {
    required: "National ID is required",
    pattern: {
      value: /^[0-9]{14}$/,
      message: "National ID must be exactly 14 digits",
    },
  },

  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    maxLength: {
      value: 32,
      message: "Password must not exceed 32 characters",
    },
    pattern: {
      // requires at least one uppercase, one lowercase, one number
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/,
      message: "Password must contain uppercase, lowercase, and a number",
    },
  },

  confirmPassword: (watch) => ({
    required: "Please confirm your password",
    validate: (value) =>
      value === watch("password") || "Passwords do not match",
  }),
};
