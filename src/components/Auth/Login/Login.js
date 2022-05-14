import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { isEmpty } from 'utils/isEmpty';
import { getUserFromToken } from 'utils/jwt';

import { setLoggedInUser } from 'actions/data/auth';

const Login = () => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.data.auth.user);

  useEffect(() => {
    if (isEmpty(searchParams.get('access_token')) || !isEmpty(user)) {
      window.location = '/';
      return;
    }

    const userInfo = getUserFromToken(searchParams.get('access_token'));

    dispatch(setLoggedInUser(userInfo));
  }, [user]);

  return (
    <>
      <div>Login in progress</div>
    </>
  );
};
export default Login;
