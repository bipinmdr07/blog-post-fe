import { useEffect } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { createBlog } from 'services/blogServices';

import BlogModal from './BlogModal';
import BlogCard from './BlogCard';
import { getBlogs, setBlog, updateBlog } from 'actions/data/blogs';
import {
  setCreateBlogModalStatus,
  setEditBlogModalStatus,
} from 'actions/ui/blogs';

const Blogs = () => {
  const isUserLoggedIn = useSelector(store => store.data.auth.isLoggedIn);
  const blogs = useSelector(store => store.data.blogs.blogs);
  const isCreateBlogModalOpen = useSelector(
    store => store.ui.blogs.isCreateBlogModalOpen
  );
  const isEditBlogModalOpen = useSelector(
    store => store.ui.blogs.isEditBlogModalOpen
  );
  const blog = useSelector(store => store.data.blogs.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      dispatch(getBlogs());
    } catch (err) {
      console.log('error: ', err);
    }
  };

  const handleSave = async values => {
    dispatch(createBlog(values));
    dispatch(setCreateBlogModalStatus(false));
  };

  const handleUpdate = async values => {
    dispatch(updateBlog(blog.blogId, values));
    dispatch(setEditBlogModalStatus(false));
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
      {isUserLoggedIn && (
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
