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

export const UPDATE_BLOG = 'UPDATE_BLOG';
export const UPDATE_BLOG_PENDING = 'UPDATE_BLOG_PENDING';
export const UPDATE_BLOG_REJECTED = 'UPDATE_BLOG_REJECTED';
export const UPDATE_BLOG_FULFILLED = 'UPDATE_BLOG_FULFILLED';

export const updateBlog = createAction(UPDATE_BLOG, blogServices.updateBlog);

export const DELETE_BLOG = 'DELETE_BLOG';
export const DELETE_BLOG_PENDING = 'DELETE_BLOG_PENDING';
export const DELETE_BLOG_REJECTED = 'DELETE_BLOG_REJECTED';
export const DELETE_BLOG_FULFILLED = 'DELETE_BLOG_FULFILLED';

export const deleteBlog = createAction(DELETE_BLOG, blogServices.deleteBlog);

export const SET_BLOG = 'SET_BLOG';

export const setBlog = createAction(SET_BLOG);
