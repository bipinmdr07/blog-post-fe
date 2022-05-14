import jwt from 'jwt-decode';
// import config from 'config';

export function getUserFromToken(token) {
  if (!token) {
    return {};
  }

  return jwt(token);
}
