import axios from 'axios';

import config from '../config';

export const githubHttp = axios.create({
  baseURL: config.oauth.github.oauthURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const http = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
