import { http } from '../utils/http';
import endpoints from '../constants/endpoints';

export async function createBlog(params) {
  return await http.post(endpoints.BLOGS, params);
}
