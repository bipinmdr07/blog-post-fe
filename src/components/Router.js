import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import * as routes from 'constants/routes';

import Home from 'components/Home';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={'/*'} element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
