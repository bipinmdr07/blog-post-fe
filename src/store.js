import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    thunk,
    promise,
  ],
});

const persistor = persistStore(store);

export default store;
export { persistor };
