import * as roles from './roles';
import * as permissions from './permissions';

const grants = {};

grants[roles.PUBLIC] = [permissions.VIEW_ALL_BLOGS];

grants[roles.USER] = [
  permissions.ADD_BLOG,
  permissions.EDIT_BLOG,
  permissions.DELETE_BLOG,
  permissions.VIEW_ALL_BLOGS,
];

export default grants;
