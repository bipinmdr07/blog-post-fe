import PropTypes from 'prop-types';
import { Input, Space } from 'antd';

const { TextArea } = Input;

const BlogForm = props => {
  const { handleChange, blog = {} } = props;

  return (
    <Space direction="vertical">
      <div>
        <Input
          name="title"
          onChange={handleChange}
          value={blog.title}
          placeholder="Title"
        ></Input>
      </div>
      <div>
        <TextArea
          name="content"
          rows={6}
          value={blog.content}
          onChange={handleChange}
          placeholder="Content"
        ></TextArea>
      </div>
    </Space>
  );
};

BlogForm.defaultProps = {
  handleChange: () => {},
  blog: {},
};

BlogForm.propTypes = {
  handleChange: PropTypes.func,
  blog: PropTypes.object,
};

export default BlogForm;
