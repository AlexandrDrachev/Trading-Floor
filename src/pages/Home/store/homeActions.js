export const getCategoriesRequestSaga = () => {
  return {
    type: 'GET_CATEGORIES_REQUEST_SAGA',
  };
};

export const getCategoriesRequestAction = () => {
  return {
    type: 'GET_CATEGORIES_REQUEST_ACTION',
  };
};

export const getCategoriesSuccessAction = (data) => {
  return {
    type: 'GET_CATEGORIES_SUCCESS_ACTION',
    payload: data,
  };
};

export const getCategoriesFailureAction = (error) => {
  return {
    type: 'GET_CATEGORIES_FAILURE_ACTION',
    payload: error,
  };
};
