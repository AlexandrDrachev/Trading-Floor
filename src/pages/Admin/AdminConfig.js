import authRoles from '../../configs/roles';
import Admin from './Admin';

const admin_path = '/admin';

const AdminConfig = {
  role: authRoles.admin,
  path: admin_path,
  exact: false,
  component: Admin,
};

export default AdminConfig;
