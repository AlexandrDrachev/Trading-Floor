import authRoles from '../../configs/roles';
import NoMatch from './NoMatch';

const noMatch_path = '*';

const NoMatchConfig = {
  role: authRoles.user,
  exact: false,
  path: noMatch_path,
  component: NoMatch,
};

export default NoMatchConfig;
