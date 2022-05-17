import { Card, Menu } from 'antd';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import MoreMenu from 'components/common/MoreMenu/MoreMenu';
import { useDispatch } from 'react-redux';
import { setBlog } from 'actions/data/blogs';
import { setEditBlogModalStatus } from 'actions/ui/blogs';

const BlogCard = props => {
  const { blog } = props;

  const dispatch = useDispatch();

  const { title, content } = blog;

  const handleEdit = () => {
    dispatch(setBlog(blog));
    dispatch(setEditBlogModalStatus(true));
  };

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
