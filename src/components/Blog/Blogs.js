import { PlusOutlined } from '@ant-design/icons';
import { Affix, Button } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import BlogModal from './BlogModal';

const Blogs = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isUserLoggedIn = useSelector(store => store.data.auth.isLoggedIn);

  const handleSave = values => {
    console.log(values);
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
