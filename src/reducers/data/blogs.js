import {
  ADD_BLOG_PENDING,
  ADD_BLOG_REJECTED,
  ADD_BLOG_FULFILLED,
  GET_BLOGS_PENDING,
  GET_BLOGS_REJECTED,
  GET_BLOGS_FULFILLED,
  SET_BLOG,
} from 'actions/data/blogs';

const INITIAL_STATE = {
  blog: {},
  blogs: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BLOG_FULFILLED:
      return {
        ...state,
        blogs: [action.payload.data, ...state.blogs],
      };

    case GET_BLOGS_FULFILLED:
      return {
        ...state,
        blogs: [...action.payload.data],
      };

    case SET_BLOG:
      return {
        ...state,
        blog: action.payload,
      };

    case ADD_BLOG_PENDING:
    case ADD_BLOG_REJECTED:
    case GET_BLOGS_PENDING:
    case GET_BLOGS_REJECTED:
    default:
      return state;
  }
};
