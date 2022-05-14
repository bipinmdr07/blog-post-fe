import { createAction } from 'redux-actions';
import { createBlog } from 'services/blogServices';

export const ADD_BLOG = 'ADD_BLOG';
export const ADD_BLOG_PENDING = 'ADD_BLOG_PENDING';
export const ADD_BLOG_REJECTED = 'ADD_BLOG_REJECTED';
export const ADD_BLOG_FULFILLED = 'ADD_BLOG_FULFILLED';

export const addBlog = createAction(ADD_BLOG, createBlog);
