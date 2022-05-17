import { createAction } from 'redux-actions';
import * as blogServices from 'services/blogServices';

export const ADD_BLOG = 'ADD_BLOG';
export const ADD_BLOG_PENDING = 'ADD_BLOG_PENDING';
export const ADD_BLOG_REJECTED = 'ADD_BLOG_REJECTED';
export const ADD_BLOG_FULFILLED = 'ADD_BLOG_FULFILLED';

export const addBlog = createAction(ADD_BLOG, blogServices.createBlog);

export const GET_BLOGS = 'GET_BLOGS';
export const GET_BLOGS_PENDING = 'GET_BLOGS_PENDING';
export const GET_BLOGS_REJECTED = 'GET_BLOGS_REJECTED';
export const GET_BLOGS_FULFILLED = 'GET_BLOGS_FULFILLED';

export const getBlogs = createAction(GET_BLOGS, blogServices.getBlogs);
