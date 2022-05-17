import { Card, Menu, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import MoreMenu from 'components/common/MoreMenu/MoreMenu';
import { useDispatch } from 'react-redux';
import { deleteBlog, setBlog } from 'actions/data/blogs';
import { setEditBlogModalStatus } from 'actions/ui/blogs';

const BlogCard = props => {
  const { blog, className } = props;

  const dispatch = useDispatch();

  const { title, content } = blog;

  const handleEdit = () => {
    dispatch(setBlog(blog));
    dispatch(setEditBlogModalStatus(true));
  };

  const handleDelete = () => {
    dispatch(setBlog({}));
    dispatch(deleteBlog(blog.blogId));
  };

  const menu = (
    <Menu
      items={[
        {
          label: 'Edit',
          icon: <EditOutlined />,
          onClick: handleEdit,
        },
        {
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
        },
      ]}
    ></Menu>
  );

  return (
    <Card
      title={title}
      className={className}
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
  className: '',
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    blogId: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default BlogCard;
