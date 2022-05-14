import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { PageHeader, Button, Avatar } from 'antd';
import {
  UserOutlined,
  GithubOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import config from 'config';

import { isEmpty } from 'utils/isEmpty';
import { logout } from 'actions/data/auth';

const TopNav = () => {
  const user = useSelector(state => state.data.auth.user);
  const dispatch = useDispatch();

  const {
    oauth: {
      github: { clientId, oauthURL },
    },
  } = config;

  const redirectToGithubAuthPage = () => {
    window.location.href = `${oauthURL}?client_id=${clientId}`;
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  let extras = [
    <Button
      key="1"
      icon={<GithubOutlined />}
      onClick={redirectToGithubAuthPage}
    >
      Github Login
    </Button>,
  ];

  if (!isEmpty(user)) {
    extras = [
      <Avatar key="2" icon={<UserOutlined />} src={user.avatarUrl}></Avatar>,
      <Button key="3" icon={<LogoutOutlined />} onClick={handleLogoutClick}>
        Logout
      </Button>,
    ];
  }

  return (
    <PageHeader
      title="Blog Post"
      className="header"
      ghost={false}
      extra={extras}
    />
  );
};

TopNav.defaultProps = {
  user: {},
};

TopNav.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

export default TopNav;
