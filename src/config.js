const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-f5872lu6l9g4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ks7pb91rtb.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Y76rLiuQG",
    APP_CLIENT_ID: "6kv0ila1qvmnauhkjj7an1tor",
    IDENTITY_POOL_ID: "us-east-1:e2126f2b-9ac0-433c-af00-8291f7ae7b8f"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1dap2te52ca39"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://k1jc92b4m6.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_wFSLk47r9",
    APP_CLIENT_ID: "30i0viie2jqbhg6iq5h8qu9f3p",
    IDENTITY_POOL_ID: "us-east-1:d4eef54e-ccce-4c82-8aeb-d7279f4ab68d"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};