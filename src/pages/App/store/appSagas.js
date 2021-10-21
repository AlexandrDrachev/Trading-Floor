import { take, call, put } from 'redux-saga/effects';

import { testAppAction } from './appActions';

export function* testAppWatcher() {
  while (true) {
    yield take('TEST_APP_SAGA');
    yield call(testAppWorker);
  }
}

function* testAppWorker() {
  yield put(testAppAction());
}