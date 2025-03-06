// F:\maid-day-app\amplify\data.ts
import { defineData } from '@aws-amplify/backend';

export const data = defineData({
  schema: /* GraphQL */ `
    type Maid @model {
      maidId: ID! @primaryKey
      email: String!
      fullName: String
      verified: Boolean
      verificationFeePaid: Boolean
      createdAt: String
      updatedAt: String
      profile: Profile
      bidHistory: [Bid]
    }
    type Profile {
      photoUrl: String
      availability: [String]
      rate: Float
    }
    type Bid {
      jobId: String
      bidAmount: Float
    }
  `,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});