import { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'antd';

import BlogForm from './BlogForm';

const BlogModal = props => {
  const [blogInfo, setBlogInfo] = useState({});
  const { isEditMode, isModalOpen, handleSave, handleCancel } = props;

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
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <BlogForm handleChange={handleChange}></BlogForm>
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
