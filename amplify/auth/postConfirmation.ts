// F:\maid-day-app\amplify\postConfirmation.ts
import { DynamoDB } from 'aws-sdk';

export const handler = async (event: any) => {
  const dynamoDB = new DynamoDB.DocumentClient();
  const { sub, email } = event.request.userAttributes;

  const params = {
    TableName: 'Maids',
    Item: {
      maidId: sub,
      email,
      fullName: '',
      verified: false,
      verificationFeePaid: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      profile: { photoUrl: '', availability: [], rate: 0.0 },
      bidHistory: [],
    },
  };

  await dynamoDB.put(params).promise();
  console.log(`Maid ${sub} added to DynamoDB`);
  return event;
};