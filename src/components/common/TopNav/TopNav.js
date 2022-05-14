import PropTypes from 'prop-types';

import { PageHeader, Button, Avatar } from 'antd';
import {
  PlusOutlined,
  UserOutlined,
  GithubOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import config from 'config';

import { isEmpty } from 'utils/isEmpty';

const TopNav = props => {
  const { user } = props;

  const {
    oauth: {
      github: { clientId, oauthURL },
    },
  } = config;

  const redirectToGithubAuthPage = () => {
    window.location.href = `${oauthURL}?client_id=${clientId}`;
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
      <Button key="2" type="primary" icon={<PlusOutlined />}>
        Create Blog
      </Button>,
      <Avatar key="3" icon={<UserOutlined />}></Avatar>,
      <Button key="4" icon={<LogoutOutlined />}>
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
