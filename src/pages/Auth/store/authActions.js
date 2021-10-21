export const userAuthorisationRequestSaga = (loginDataObj) => {
  return {
    type: 'USER_AUTHORISATION_REQUEST_SAGA',
    payload: loginDataObj,
  };
};

export const userAuthorisationRequestAction = (loginDataObj) => {
  return {
    type: 'USER_AUTHORISATION_REQUEST_ACTION',
    payload: loginDataObj,
  };
};

export const userAuthorisationSuccessAction = (user) => {
  return {
    type: 'USER_AUTHORISATION_SUCCESS_ACTION',
    payload: user,
  };
};

export const userAuthorisationFailureAction = (error) => {
  return {
    type: 'USER_AUTHORISATION_FAILURE_ACTION',
    payload: error,
  };
};

export const userRegistrationRequestSaga = (registerDataObj) => {
  return {
    type: 'USER_REGISTRATION_REQUEST_SAGA',
    payload: registerDataObj,
  };
};

export const userRegistrationRequestAction = (registerDataObj) => {
  return {
    type: 'USER_REGISTRATION_REQUEST_ACTION',
    payload: registerDataObj,
  };
};

export const userRegistrationSuccessAction = (user) => {
  return {
    type: 'USER_REGISTRATION_SUCCESS_ACTION',
    payload: user,
  };
};

export const userRegistrationFailureAction = (error) => {
  return {
    type: 'USER_REGISTRATION_FAILURE_ACTION',
    payload: error,
  };
};

export const logoutAction = () => {
  return {
    type: 'LOGOUT_ACTION',
  };
};
