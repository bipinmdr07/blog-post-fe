import PropTypes from 'prop-types';
import { Input, Space } from 'antd';

const { TextArea } = Input;

const BlogForm = props => {
  const { handleChange } = props;

  return (
    <Space direction="vertical">
      <div>
        <Input name="name" onChange={handleChange} placeholder="Name"></Input>
      </div>
      <div>
        <TextArea
          name="content"
          rows={6}
          onChange={handleChange}
          placeholder="Content"
        ></TextArea>
      </div>
    </Space>
  );
};

BlogForm.defaultProps = {
  handleChange: () => {},
};

BlogForm.propTypes = {
  handleChange: PropTypes.func,
};

export default BlogForm;
