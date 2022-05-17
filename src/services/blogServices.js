import { http } from '../utils/http';
import endpoints from '../constants/endpoints';
import { interpolate } from 'utils/string';

export async function createBlog(params) {
  return await http.post(endpoints.BLOGS, params);
}

export async function getBlogs() {
  return await http.get(endpoints.BLOGS);
}

export async function updateBlog(id, payload) {
  return await http.put(interpolate(endpoints.BLOG, { id }), payload);
}

export async function deleteBlog(id) {
  return await http.delete(interpolate(endpoints.BLOG, { id }));
}
