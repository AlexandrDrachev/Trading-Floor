import { take, call, put, select } from 'redux-saga/effects';

import {
  addProductAction,
  payProductRequestAction,
  payProductSuccessAction,
  payProductFailureAction
} from './shoppingCartActions';

export function* addProductWatcher() {
  while (true) {
    const { payload } = yield take('ADD_PRODUCT_SAGA');
    yield call(addProductWorker, payload);
  }
}

function* addProductWorker(details) {
  const currentCart = yield select(({ shoppingCartState }) => shoppingCartState.data);
  const { product, count } = details;
  let checkProduct = null;
  if (!currentCart.length) {
    currentCart.push({ productName: product.name, count, product });
    return yield put(addProductAction(currentCart));
  }
  if (currentCart.length) {
    checkProduct = currentCart.find((item) => item.productName === product.name);
  }
  if (currentCart.length && !checkProduct) {
    currentCart.push({ productName: product.name, count, product });
    return yield put(addProductAction(currentCart));
  }
  if (checkProduct) {
    const productIdx = currentCart.findIndex((item) => item.productName === checkProduct.productName);
    const newCount = +checkProduct.count + +count;
    if (newCount < 1) {
      const cart = currentCart.filter((item) => item.productName !== checkProduct.productName);
      return yield put(addProductAction(cart));
    }
    currentCart[productIdx] = { ...checkProduct, count: newCount };
    return yield put(addProductAction(currentCart));
  }
}

export function* payProductsWatcher() {
  while (true) {
    const { payload } = yield take('PAY_PRODUCTS_REQUEST_SAGA');
    yield call(payProductsWorker, payload);
  }
}

function* payProductsWorker(order) {
  yield put(payProductRequestAction());
  //next any code to pay
  if (order) {
    yield put(payProductSuccessAction());
  } else {
    yield put(payProductFailureAction());
  }
}
