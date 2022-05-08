const config = {
  env: process.env.NODE_ENV || 'development',
  basename: process.env.REACT_APP_BASE_NAME || '/',
  api: {
    baseURL: 'http://localhost:4000/api/v1',
  },
  oauth: {
    github: {
      oauthURL: process.env.REACT_APP_GITHUB_OAUTH_URL,
      clientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    },
  },
};

export default config;
