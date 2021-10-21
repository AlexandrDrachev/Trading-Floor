import authRoles from '../../configs/roles';
import Category from './index';

const category_path = '/categories/:category';

const CategoryConfig = {
  role: authRoles.user,
  path: category_path,
  exact: true,
  component: Category,
};

export default CategoryConfig;
