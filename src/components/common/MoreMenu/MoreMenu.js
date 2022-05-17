/* eslint-disable */
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';

const MoreMenu = props => {
  const { menu, children } = props;

  return <Dropdown overlay={menu}>{children}</Dropdown>;
};

MoreMenu.defaultProps = {
  menu: null,
  children: null,
};

MoreMenu.PropTypes = {
  menu: PropTypes.component || null,
  children: PropTypes.component || null,
};

export default MoreMenu;
