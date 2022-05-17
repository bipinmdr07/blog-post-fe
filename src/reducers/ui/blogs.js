import {
  ADD_BLOG_PENDING,
  ADD_BLOG_REJECTED,
  ADD_BLOG_FULFILLED,
  GET_BLOGS_PENDING,
  GET_BLOGS_REJECTED,
  GET_BLOGS_FULFILLED,
} from 'actions/data/blogs';
import {
  SET_CREATE_BLOG_MODAL_STATUS,
  SET_EDIT_BLOG_MODAL_STATUS,
} from 'actions/ui/blogs';

const INITIAL_STATE = {
  isAddingBlog: false,
  isFetchingBlogs: false,
  isCreateBlogModalOpen: false,
  isEditBlogModalOpen: false,
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

    case SET_CREATE_BLOG_MODAL_STATUS:
      return {
        ...state,
        isCreateBlogModalOpen: action.payload,
      };

    case SET_EDIT_BLOG_MODAL_STATUS:
      return {
        ...state,
        isEditBlogModalOpen: action.payload,
      };

    default:
      return state;
  }
};
