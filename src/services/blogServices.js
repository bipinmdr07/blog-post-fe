import { http } from '../utils/http';
import endpoints from '../constants/endpoints';

export async function createBlog(params) {
  return await http.post(endpoints.BLOGS, params);
}

export async function getBlogs() {
  return await http.get(endpoints.BLOGS);
}
