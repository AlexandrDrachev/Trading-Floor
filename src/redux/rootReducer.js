import { initialAppState, appReducer } from '../pages/App/store/appReducer';
import { initialAuthState, authReducer } from '../pages/Auth/store/authReducer';
import { initialHomeState, homeReducer } from '../pages/Home/store/homeReducer';
import { initialCategoryState, categoryReducer } from '../pages/Category/store/categoryReducer';
import { initialProductState, productReducer } from '../pages/Product/store/productReducer';
import { initialShoppingCartState, shoppingCartReducer } from '../pages/ShoppingCart/store/shoppingCartReducer';

const initialState = {
  appState: initialAppState,
  authState: initialAuthState,
  homeState: initialHomeState,
  categoryState: initialCategoryState,
  productState: initialProductState,
  shoppingCartState: initialShoppingCartState,
};

const rootReducer = (state = initialState, action) => {
  const { appState, authState, homeState, categoryState, productState, shoppingCartState } = state;

  console.log('action.type: ', action.type);

  return {
    appState: appReducer(appState, action),
    authState: authReducer(authState, action),
    homeState: homeReducer(homeState, action),
    categoryState: categoryReducer(categoryState, action),
    productState: productReducer(productState, action),
    shoppingCartState: shoppingCartReducer(shoppingCartState, action),
  };
};

export default rootReducer;
