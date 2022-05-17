import HttpStatus from 'http-status';
import history from 'utils/history';
import * as routes from 'constants/routes';

import { logout } from 'actions/data/auth';
import store from 'store';

import * as tokenService from 'services/tokenService';

const RETRY_COUNT_LIMIT = 3;
const AUTHORIZATION_HEADER = 'Authorization';
const JWT_EXPIRED = 'jwt expired';
const NO_AUTH_TOKEN = 'No authorization token was found';
const INVALID_TOKEN = 'Invalid Token';

/**
 * Build authrorization header.
 *
 * @param {String} accessToken
 * @returns {String}
 */
function buildAuthHeader(accessToken) {
  return `Bearer ${accessToken}`;
}

/**
 * Interceptor to add authentication header for all requests.
 *
 * @param {Object} request
 * @returns {Object}
 */
export function requestInterceptor(request) {
  const accessToken = tokenService.getToken();

  if (accessToken && !request.headers.AUTHORIZATION_HEADER) {
    request.headers[AUTHORIZATION_HEADER] = buildAuthHeader(accessToken);
  }

  return request;
}

/**
 * Interceptor to handle the authentication error.
 * Also can be used to refresh access token.
 *
 * @param {Object} error
 * @returns {Object}
 */
export async function responseInterceptor(error) {
  if (!error.response) {
    return Promise.reject(error);
  }

  const code = error.response.status;
  const message =
    error.response.data.error.message || error.response.data.error;

  const originalRequest = error.config;

  if (
    (code === HttpStatus.UNAUTHORIZED && message === JWT_EXPIRED) ||
    message === JWT_EXPIRED ||
    message === NO_AUTH_TOKEN ||
    message === INVALID_TOKEN ||
    originalRequest.retryCount > RETRY_COUNT_LIMIT
  ) {
    store.dispatch(logout());
    history.push(routes.HOME);
    // TODO: Add toast message here
  }

  return Promise.reject(error);
}
