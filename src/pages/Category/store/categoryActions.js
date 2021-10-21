export const getCategoryDataRequestSaga = (categoryName) => {
  return {
    type: 'GET_CATEGORY_DATA_REQUEST_SAGA',
    payload: categoryName,
  };
};

export const getCategoryDataRequestAction = () => {
  return {
    type: 'GET_CATEGORY_DATA_REQUEST_ACTION',
  };
};

export const getCategoryDataSuccessAction = (data) => {
  return {
    type: 'GET_CATEGORY_DATA_SUCCESS_ACTION',
    payload: data,
  };
};

export const getCategoryDataFailureAction = (error) => {
  return {
    type: 'GET_CATEGORY_DATA_FAILURE_ACTION',
    payload: error,
  };
};

export const returnToDefaultAction = () => {
  return {
    type: 'RETURN_TO_DEFAULT_ACTION',
  };
};
