const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "nived-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://33cy5vzef1.execute-api.us-east-1.amazonaws.com/prod/notes"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_HX559redG",
    APP_CLIENT_ID: "1254bnpekrkq0m1v9kpob3j67l",
    IDENTITY_POOL_ID: "ap-south-1:75902a73-8332-424b-a186-51f0e3bb69c5"
  }
};

export default config;
