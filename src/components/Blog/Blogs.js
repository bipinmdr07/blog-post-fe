import { useEffect } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Affix, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { createBlog } from 'services/blogServices';

import BlogModal from './BlogModal';
import BlogCard from './BlogCard';
import { getBlogs, setBlog } from 'actions/data/blogs';
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
  };

  const handleEdit = async values => {
    console.log('Edit : ', values);
    // dispatch()
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
    <div style={{ height: 'calc(100vh - 80px)' }}>
      {blogs.map((blog, index) => (
        <BlogCard key={`blog-${index}`} blog={blog}></BlogCard>
      ))}
      {isUserLoggedIn && (
        <Affix offsetTop={80}>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={handleAddAffixBtnClick}
          ></Button>
        </Affix>
      )}
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
          handleSave={handleEdit}
          handleCancel={handleCancel}
        ></BlogModal>
      )}
    </div>
  );
};

export default Blogs;
