import { useEffect } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import BlogModal from './BlogModal';
import BlogCard from './BlogCard';
import { addBlog, getBlogs, setBlog, updateBlog } from 'actions/data/blogs';
import {
  setCreateBlogModalStatus,
  setEditBlogModalStatus,
} from 'actions/ui/blogs';
import { hasPermission } from 'utils/permission';

import * as permissions from 'constants/permissions';

const Blogs = () => {
  const blogs = useSelector(store => store.data.blogs.blogs);
  const isCreateBlogModalOpen = useSelector(
    store => store.ui.blogs.isCreateBlogModalOpen
  );
  const isEditBlogModalOpen = useSelector(
    store => store.ui.blogs.isEditBlogModalOpen
  );
  const user = useSelector(store => store.data.auth.user);
  const blog = useSelector(store => store.data.blogs.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      await dispatch(getBlogs());
      message.success('All blogs fetched successfully');
    } catch (err) {
      console.log('error: ', err);
    }
  };

  const handleSave = async values => {
    try {
      await dispatch(addBlog(values));

      message.success('Blog created successfully.');
      dispatch(setCreateBlogModalStatus(false));
    } catch (err) {
      message.error('Failed to create Blog');
    }
  };

  const handleUpdate = async values => {
    try {
      await dispatch(updateBlog(blog.blogId, values));

      message.success('Blog updated successfully');
      dispatch(setEditBlogModalStatus(false));
    } catch (err) {
      message.error('Failed to update the Blog.');
    }
  };

  const handleCancel = () => {
    dispatch(setBlog({}));
    dispatch(setCreateBlogModalStatus(false));
    dispatch(setEditBlogModalStatus(false));
  };

  const handleAddAffixBtnClick = () => {
    dispatch(setBlog({}));
    dispatch(setCreateBlogModalStatus(true));
  };

  return (
    <div style={{ height: 'calc(100vh - 112px)' }}>
      {hasPermission(user, permissions.ADD_BLOG) && (
        <div className="mb-4x">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddAffixBtnClick}
          >
            Create Blog
          </Button>
        </div>
      )}
      <div className="d-grid">
        {blogs.map((blog, index) => (
          <BlogCard
            key={`blog-${index}`}
            blog={blog}
            className="grid-item"
          ></BlogCard>
        ))}
      </div>
      {isCreateBlogModalOpen && (
        <BlogModal
          isModalOpen={isCreateBlogModalOpen}
          handleSave={handleSave}
          handleCancel={handleCancel}
        ></BlogModal>
      )}
      {isEditBlogModalOpen && (
        <BlogModal
          isEditMode={true}
          isModalOpen={isEditBlogModalOpen}
          handleSave={handleUpdate}
          handleCancel={handleCancel}
        ></BlogModal>
      )}
    </div>
  );
};

export default Blogs;
