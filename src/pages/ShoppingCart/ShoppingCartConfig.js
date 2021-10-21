import authRoles from '../../configs/roles';
import ShoppingCart from './ShoppingCart';

const shoppingCart_path = '/shopping-cart';

const ShoppingCartConfig = {
  role: authRoles.user,
  path: shoppingCart_path,
  exact: true,
  component: ShoppingCart,
};

export default ShoppingCartConfig;
