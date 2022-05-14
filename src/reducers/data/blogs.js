import {
  ADD_BLOG_PENDING,
  ADD_BLOG_REJECTED,
  ADD_BLOG_FULFILLED,
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

    case ADD_BLOG_PENDING:
    case ADD_BLOG_REJECTED:
    default:
      return state;
  }
};
