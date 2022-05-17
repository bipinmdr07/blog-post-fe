import { Card, Menu } from 'antd';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import MoreMenu from 'components/common/MoreMenu/MoreMenu';

const BlogCard = props => {
  const { blog } = props;

  const { title, content } = blog;

  const handleEdit = () => {};

  const handleDelete = () => {};

  const menu = (
    <Menu
      items={[
        {
          label: 'Edit',
          icon: <EditOutlined />,
          onClick: handleEdit,
        },
        {
          label: 'Delete',
          icon: <DeleteOutlined />,
          onClick: handleDelete,
        },
      ]}
    ></Menu>
  );

  return (
    <Card
      title={title}
      extra={
        <MoreMenu menu={menu}>
          <MoreOutlined className="cursor-pointer"></MoreOutlined>
        </MoreMenu>
      }
    >
      {content}
    </Card>
  );
};

BlogCard.defaultProps = {
  blog: {},
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default BlogCard;
