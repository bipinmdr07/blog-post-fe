import {
  ADD_BLOG_PENDING,
  ADD_BLOG_REJECTED,
  ADD_BLOG_FULFILLED,
} from 'actions/data/blogs';

const INITIAL_STATE = {
  isAddingBlog: false,
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

    default:
      return state;
  }
};
