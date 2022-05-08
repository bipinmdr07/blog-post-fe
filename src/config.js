const config = {
  env: process.env.NODE_ENV || 'development',
  basename: process.env.REACT_APP_BASE_NAME || '/',
  oauth: {
    github: {
      redirectURL: process.env.REACT_APP_GITHUB_OAUTH_URL,
      clientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    },
  },
};

export default config;
