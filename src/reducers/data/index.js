import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import blogs from './blogs';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export default combineReducers({
  blogs,
  auth: persistReducer(authPersistConfig, auth),
});
