import { useEffect } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Affix, Button } from 'antd';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBlog } from 'services/blogServices';

import BlogModal from './BlogModal';
import { getBlogs } from 'actions/data/blogs';

const Blogs = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isUserLoggedIn = useSelector(store => store.data.auth.isLoggedIn);
  const blogs = useSelector(store => store.data.blogs.blogs);
  const dispatch = useDispatch();

  console.log({ getBlogs });

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

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddAffixBtnClick = () => {
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  return (
    <div style={{ height: 'calc(100vh - 80px)' }}>
      {blogs.map((blog, index) => (
        <p key={`blog-${index}`}>{blog.title}</p>
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
      <BlogModal
        isEditMode={isEditMode}
        isModalOpen={isModalOpen}
        handleSave={handleSave}
        handleCancel={handleCancel}
      ></BlogModal>
    </div>
  );
};

export default Blogs;
