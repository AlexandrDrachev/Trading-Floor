import { take, call, put } from 'redux-saga/effects';

import {
  userAuthorisationRequestAction,
  userAuthorisationSuccessAction,
  userAuthorisationFailureAction,
  userRegistrationRequestAction,
  userRegistrationSuccessAction,
  userRegistrationFailureAction,
} from './authActions';
import { authUser, registerNewUser } from '../../../services/authApi';

export function* userAuthorisationWatcher() {
  while (true) {
    const { payload } = yield take('USER_AUTHORISATION_REQUEST_SAGA');
    yield call(userAuthorisationWorker, payload);
  }
}

function* userAuthorisationWorker(userLoginObj) {
  yield put(userAuthorisationRequestAction());
  const { res, error } = yield call(authUser, userLoginObj);
  if (res) {
    yield put(userAuthorisationSuccessAction(res));
  }
  if (error) {
    yield put(userAuthorisationFailureAction(error));
  }
}

export function* userRegisterWatcher() {
  while (true) {
    const { payload } = yield take('USER_REGISTRATION_REQUEST_SAGA');
    yield call(userRegisterWorker, payload);
  }
}

function* userRegisterWorker(userRegisterObj) {
  yield put(userRegistrationRequestAction());
  const { res, error } = yield call(registerNewUser, userRegisterObj);
  if (res) {
    yield put(userRegistrationSuccessAction(res));
  }
  if (error) {
    yield put(userRegistrationFailureAction(error));
  }
}
