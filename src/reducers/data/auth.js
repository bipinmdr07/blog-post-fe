import { LOGOUT, SET_LOGGED_IN_USER } from 'actions/data/auth';

const INITIAL_STATE = {
  isLoggedIn: false,
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };

    default:
      return state;
  }
};
