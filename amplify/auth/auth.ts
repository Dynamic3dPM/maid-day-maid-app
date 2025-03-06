// F:\maid-day-app\amplify\auth.ts
import { defineAuth, defineFunction } from '@aws-amplify/backend';

// Define the postConfirmation Lambda function
const postConfirmationFunction = defineFunction({
  name: 'postConfirmationHandler',
  entry: './postConfirmation.ts',
});

// Define the customMessage Lambda function for OTP email
const customMessageFunction = defineFunction({
  name: 'customMessageHandler',
  entry: './customMessage.ts',
});

export const auth = defineAuth({
  loginWith: {
    email: true, // Enables email-based login/signup with OTP by default
  },
  triggers: {
    postConfirmation: postConfirmationFunction,
    customMessage: customMessageFunction, // Customizes OTP email
  },
});