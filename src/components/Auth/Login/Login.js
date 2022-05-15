import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { sleep } from 'utils/sleep';
import { isEmpty } from 'utils/isEmpty';
import { getUserFromToken } from 'utils/jwt';

import { setLoggedInUser } from 'actions/data/auth';
import { setToken } from 'services/tokenService';

const Login = () => {
  // eslint-disable-next-line
  const [searchParams, _] = useSearchParams('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.data.auth.user);

  useEffect(() => {
    handleUserLogin();
  }, [user]);

  const handleUserLogin = async () => {
    if (isEmpty(searchParams.get('access_token')) || !isEmpty(user)) {
      await sleep(1000);

      window.location = '/';
      return;
    }

    const userInfo = getUserFromToken(searchParams.get('access_token'));
    setToken(searchParams.get('access_token'));

    dispatch(setLoggedInUser(userInfo));
  };

  return (
    <>
      <div>Login in progress</div>
    </>
  );
};
export default Login;
