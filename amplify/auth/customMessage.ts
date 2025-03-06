// F:\maid-day-app\amplify\customMessage.ts
export const handler = async (event: any) => {
  const { triggerSource, code } = event.request;

  if (triggerSource === 'CustomMessage_SignUp') {
    event.response.emailSubject = 'Your Verification Code';
    event.response.emailMessage = `Hello! Your verification code is ${code}`;
  } else if (triggerSource === 'CustomMessage_ForgotPassword') {
    event.response.emailSubject = 'Reset Your Password';
    event.response.emailMessage = `Your password reset code is ${code}`;
  }

  return event;
};