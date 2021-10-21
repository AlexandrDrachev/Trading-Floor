import { all } from 'redux-saga/effects';

import { testAppWatcher } from '../pages/App/store/appSagas';
import { userAuthorisationWatcher, userRegisterWatcher } from '../pages/Auth/store/authSagas';
import { getCategoriesWatcher } from '../pages/Home/store/homeSagas';
import { getCategoryDataWatcher } from '../pages/Category/store/categorySagas';
import { getProductDataWatcher } from '../pages/Product/store/productSagas';
import { addProductWatcher, payProductsWatcher } from '../pages/ShoppingCart/store/shoppingCartSagas';

export function* rootSaga() {
  yield all([
    rootSagaTest(),
    testAppWatcher(),
    userAuthorisationWatcher(),
    userRegisterWatcher(),
    getCategoriesWatcher(),
    getCategoryDataWatcher(),
    getProductDataWatcher(),
    addProductWatcher(),
    payProductsWatcher(),
  ]);
}

function* rootSagaTest() {
  yield console.log('rootSaga is ready!');
}
