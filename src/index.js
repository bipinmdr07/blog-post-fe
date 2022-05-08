import { StrictMode } from 'react';
import { render } from 'react-dom';

import RedBox from 'redbox-react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

import App from 'components/App';

import config from './config';

const renderComponent = rootElement => {
  render(
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <StrictMode>
          <App />
        </StrictMode>
      </Provider>
    </PersistGate>,
    rootElement
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const reactElement = document.getElementById('root');

  if (reactElement) {
    if (config.env === 'development') {
      try {
        renderComponent(reactElement);
      } catch (error) {
        render(<RedBox error={error} />, reactElement);
      }
    } else {
      renderComponent('reactElement');
    }
  }
});
