import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export default store;
export { persistor };
