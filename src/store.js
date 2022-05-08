import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export default store;
export { persistor };
