import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import RedBox from 'redbox-react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

import App from 'components/App';

import config from './config';

import 'antd/dist/antd.min.css';
import './index.css';

const renderComponent = rootElement => {
  rootElement.render(
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <StrictMode>
          <App />
        </StrictMode>
      </Provider>
    </PersistGate>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const reactElement = ReactDOM.createRoot(document.getElementById('root'));

  if (reactElement) {
    if (config.env === 'development') {
      try {
        renderComponent(reactElement);
      } catch (error) {
        reactElement.render(<RedBox error={error} />);
      }
    } else {
      renderComponent('reactElement');
    }
  }
});
