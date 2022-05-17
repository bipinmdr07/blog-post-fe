import { Card, Menu, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import MoreMenu from 'components/common/MoreMenu/MoreMenu';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, setBlog } from 'actions/data/blogs';
import { setEditBlogModalStatus } from 'actions/ui/blogs';
import { hasPermission } from 'utils/permission';
import { DELETE_BLOG, EDIT_BLOG } from 'constants/permissions';

const BlogCard = props => {
  const { blog, className } = props;

  const dispatch = useDispatch();
  const user = useSelector(state => state.data.auth.user);

  const { title, content } = blog;

  const handleEdit = () => {
    dispatch(setBlog(blog));
    dispatch(setEditBlogModalStatus(true));
  };

  const handleDelete = () => {
    dispatch(setBlog({}));
    dispatch(deleteBlog(blog.blogId));
  };

  const hasPermissionToEdit = () => {
    return hasPermission(user, EDIT_BLOG) && user.userId === blog.userId;
  };

  const hasPermissionToDelete = () => {
    return hasPermission(user, DELETE_BLOG) && user.userId === blog.userId;
  };

  const getMenuItems = () => {
    const items = [];

    if (hasPermissionToEdit()) {
      items.push({
        label: 'Edit',
        icon: <EditOutlined />,
        onClick: handleEdit,
      });
    }

    if (hasPermissionToDelete()) {
      items.push({
        label: (
          <Popconfirm
            title="Are you sure to delete this Blog?"
            okText="Yes"
            cancelText="No"
            onConfirm={handleDelete}
          >
            Delete
          </Popconfirm>
        ),
        icon: <DeleteOutlined />,
      });
    }

    return items;
  };

  const menu = <Menu items={getMenuItems()}></Menu>;

  return (
    <Card
      title={title}
      className={className}
      extra={
        (hasPermissionToEdit() || hasPermissionToDelete()) && (
          <MoreMenu menu={menu}>
            <MoreOutlined className="cursor-pointer"></MoreOutlined>
          </MoreMenu>
        )
      }
    >
      {content}
    </Card>
  );
};

BlogCard.defaultProps = {
  blog: {},
  className: '',
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    blogId: PropTypes.string,
    userId: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default BlogCard;
