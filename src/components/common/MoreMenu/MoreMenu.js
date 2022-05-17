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

MoreMenu.propTypes = {
  menu: PropTypes.node || null,
  children: PropTypes.node || null,
};

export default MoreMenu;
