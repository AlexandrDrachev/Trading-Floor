import authRoles from '../../configs/roles';

import Auth from './Auth';
import Login from './Login';
import Register from './Register';

const auth_path = '/auth';

const AuthConfig = {
  role: authRoles.user,
  path: auth_path,
  exact: false,
  component: Auth,
  routes: [
    {
      role: authRoles.user,
      path: '/auth/signin',
      exact: false,
      component: Login,
    },
    {
      role: authRoles.user,
      path: '/auth/register',
      exact: false,
      component: Register,
    },
  ],
};

export default AuthConfig;
