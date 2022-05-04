import { StrictMode } from 'react';
import { render } from 'react-dom';

import RedBox from 'redbox-react';

import App from './components/App';

import config from './config';

const renderComponent = rootElement => {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
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
