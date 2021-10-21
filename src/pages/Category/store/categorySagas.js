import { take, call, put } from 'redux-saga/effects';

import {
  getCategoryDataRequestAction,
  getCategoryDataSuccessAction,
  getCategoryDataFailureAction,
} from './categoryActions';
import { getCategory } from '../../../services/productsApi';

export function* getCategoryDataWatcher() {
  while (true) {
    const { payload } = yield take('GET_CATEGORY_DATA_REQUEST_SAGA');
    yield call(getCategoryDataWorker, payload);
  }
}

function* getCategoryDataWorker(categoryName) {
  yield put(getCategoryDataRequestAction());
  const { res, error } = yield call(getCategory, categoryName);
  if (res) {
    yield put(getCategoryDataSuccessAction(res));
  }
  if (error) {
    yield put(getCategoryDataFailureAction(error));
  }
}
