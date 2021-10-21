import authRoles from '../../configs/roles';
import Product from './Product';

const product_path = '/categories/:category/:product';

const ProductConfig = {
  role: authRoles.user,
  path: product_path,
  exact: true,
  component: Product,
};

export default ProductConfig;
