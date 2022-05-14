import { createAction } from 'redux-actions';

export const LOGIN = 'LOGIN';
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';

export const LOGOUT = 'LOGOUT';

export const setLoggedInUser = createAction(SET_LOGGED_IN_USER);

export const logout = createAction(LOGOUT);
