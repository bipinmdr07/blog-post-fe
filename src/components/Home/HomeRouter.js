import { Route, Routes } from 'react-router-dom';

import * as routes from 'constants/routes';

import Blogs from 'components/Blog/Blogs';
import Login from 'components/Auth/Login';

const HomeRouter = () => (
  <Routes>
    <Route path={routes.AUTH_LOGIN} element={<Login />}></Route>
    <Route index path={routes.HOME} element={<Blogs />} />
  </Routes>
);

export default HomeRouter;
