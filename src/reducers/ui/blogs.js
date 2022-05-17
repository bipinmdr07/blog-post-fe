import {
  ADD_BLOG_PENDING,
  ADD_BLOG_REJECTED,
  ADD_BLOG_FULFILLED,
  GET_BLOGS_PENDING,
  GET_BLOGS_REJECTED,
  GET_BLOGS_FULFILLED,
} from 'actions/data/blogs';

const INITIAL_STATE = {
  isAddingBlog: false,
  isFetchingBlogs: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BLOG_PENDING:
      return {
        ...state,
        isAddingBlog: true,
      };

    case ADD_BLOG_REJECTED:
    case ADD_BLOG_FULFILLED:
      return {
        ...state,
        isAddingBlog: false,
      };

    case GET_BLOGS_PENDING:
      return {
        ...state,
        isFetchingBlogs: true,
      };

    case GET_BLOGS_REJECTED:
    case GET_BLOGS_FULFILLED:
      return {
        ...state,
        isFetchingBlogs: false,
      };

    default:
      return state;
  }
};
