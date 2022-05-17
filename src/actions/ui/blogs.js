import { createAction } from 'redux-actions';

export const SET_CREATE_BLOG_MODAL_STATUS = 'SET_CREATE_BLOG_MODAL_STATUS';

export const SET_EDIT_BLOG_MODAL_STATUS = 'SET_EDIT_BLOG_MODAL_STATUS';

export const setCreateBlogModalStatus = createAction(
  SET_CREATE_BLOG_MODAL_STATUS
);

export const setEditBlogModalStatus = createAction(SET_EDIT_BLOG_MODAL_STATUS);
