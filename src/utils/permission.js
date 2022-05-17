import { flattenDeep } from 'lodash';
import grants from 'constants/grant';
import * as roles from 'constants/roles';

export function hasPermission(user, permissions) {
  let _permissions = permissions;

  if (typeof _permissions === 'string') {
    _permissions = [permissions];
  }

  const rolePermissions = [
    ...new Set(
      flattenDeep((user?.roles || [roles.PUBLIC])?.map(role => grants[role]))
    ),
  ];

  let permissionsMap = rolePermissions.reduce(
    (acc, permission) => ({
      ...acc,
      [permission]: true,
    }),
    {}
  );

  for (let i = 0; i < _permissions.length; i++) {
    if (permissionsMap[_permissions[i]]) {
      return true;
    }
  }

  return false;
}
