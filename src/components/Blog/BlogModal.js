import { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'antd';

import BlogForm from './BlogForm';
import { useSelector } from 'react-redux';

const BlogModal = props => {
  const { isEditMode, isModalOpen, handleSave, handleCancel } = props;

  const blog = useSelector(state => state.data.blogs.blog);
  const [blogInfo, setBlogInfo] = useState(blog);

  const handleChange = event => {
    setBlogInfo({
      ...blogInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleOk = () => {
    handleSave(blogInfo);
    handleCancel();
  };

  return (
    <Modal
      title={`${isEditMode ? 'Edit' : 'Create'} Blog`}
      okText={isEditMode ? 'Update' : 'Create'}
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <BlogForm blog={blogInfo} handleChange={handleChange}></BlogForm>
    </Modal>
  );
};

BlogModal.defaultProps = {
  isEditMode: false,
  isModalOpen: false,
  handleSave: () => {},
  handleCancel: () => {},
};

BlogModal.propTypes = {
  isEditMode: PropTypes.bool,
  isModalOpen: PropTypes.bool,
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,
};

export default BlogModal;
