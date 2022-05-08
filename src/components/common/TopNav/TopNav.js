import PropTypes from 'prop-types';

import { PageHeader, Button, Avatar } from 'antd';
import {
  UserOutlined,
  GithubOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import './TopNav.css';

const TopNav = props => {
  const { user } = props;

  let extras = [
    <Button key="1" icon={<GithubOutlined />}>
      Github Login
    </Button>,
  ];

  if (Object.keys(user || {}).length) {
    extras = [
      <Avatar key="2" icon={<UserOutlined />}></Avatar>,
      <Button key="3" icon={<LogoutOutlined />}>
        Logout
      </Button>,
    ];
  }

  return (
    <PageHeader
      title="Blog Post"
      className="site-page-header-ghost-mode header"
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
