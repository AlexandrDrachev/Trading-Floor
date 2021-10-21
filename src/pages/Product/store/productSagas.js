import { take, call, put } from 'redux-saga/effects';

import { getProduct } from '../../../services/productsApi';
import { getProductDataRequestAction, getProductDataSuccessAction, getProductDataFailureAction } from './productActions';

export function* getProductDataWatcher() {
  while (true) {
    const { payload } = yield take('GET_PRODUCT_DATA_REQUEST_SAGA');
    yield call(getProductDataWorker, payload);
  }
}

function* getProductDataWorker(product) {
  yield put(getProductDataRequestAction());
  const { res, error } = yield call(getProduct, product);
  if (res) {
    yield put(getProductDataSuccessAction(res));
  }
  if (error) {
    yield put(getProductDataFailureAction(error));
  }
}
