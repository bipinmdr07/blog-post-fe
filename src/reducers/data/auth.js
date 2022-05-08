import {
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_FULFILLED,
} from 'actions/data/auth';

const INITIAL_STATE = {
  isLoggedIn: false,
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
      };

    case LOGIN_REJECTED:
      return {
        ...state,
      };

    case LOGIN_FULFILLED:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.data,
      };

    default:
      return state;
  }
};
