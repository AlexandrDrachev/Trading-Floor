import authRoles from '../../configs/roles';
import Home from './Home';

const home_path = '/';

const HomeConfig = {
  role: authRoles.user,
  path: home_path,
  exact: true,
  component: Home,
};

export default HomeConfig;
