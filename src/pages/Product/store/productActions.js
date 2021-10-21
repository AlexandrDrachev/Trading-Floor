export const getProductDataRequestSaga = (product) => {
  return {
    type: 'GET_PRODUCT_DATA_REQUEST_SAGA',
    payload: product,
  };
};

export const getProductDataRequestAction = () => {
  return {
    type: 'GET_PRODUCT_DATA_REQUEST_ACTION',
  };
};

export const getProductDataSuccessAction = (data) => {
  return {
    type: 'GET_PRODUCT_DATA_SUCCESS_ACTION',
    payload: data,
  };
};

export const getProductDataFailureAction = (error) => {
  return {
    type: 'GET_PRODUCT_DATA_FAILURE_ACTION',
    payload: error,
  };
};

export const returnToDefaultProductStateAction = () => {
  return {
    type: 'RETURN_TO_DEFAULT_PRODUCT_STATE_ACTION',
  };
};
