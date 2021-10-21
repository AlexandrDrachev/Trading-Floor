import { take, call, put } from 'redux-saga/effects';

import { getCategories } from '../../../services/productsApi';
import { getCategoriesSuccessAction, getCategoriesFailureAction, getCategoriesRequestAction } from "./homeActions";

export function* getCategoriesWatcher() {
  while (true) {
    yield take('GET_CATEGORIES_REQUEST_SAGA');
    yield call(getCategoriesWorker);
  }
}

function* getCategoriesWorker() {
  yield put(getCategoriesRequestAction());
  const { res, error } = yield call(getCategories);
  if (res) {
    yield put(getCategoriesSuccessAction(res));
  }
  if (error) {
    yield put(getCategoriesFailureAction(error));
  }
}
