export const addProductSaga = (details) => {
  return {
    type: 'ADD_PRODUCT_SAGA',
    payload: details,
  };
};

export const addProductAction = (cart) => {
  return {
    type: 'ADD_PRODUCT_ACTION',
    payload: cart,
  };
};

export const payProductRequestSaga = (order) => {
  return {
    type: 'PAY_PRODUCTS_REQUEST_SAGA',
    payload: order,
  };
};

export const payProductRequestAction = () => {
  return {
    type: 'PAY_PRODUCTS_REQUEST_ACTION',
  };
};

export const payProductSuccessAction = () => {
  return {
    type: 'PAY_PRODUCTS_SUCCESS_ACTION',
  };
};

export const payProductFailureAction = () => {
  return {
    type: 'PAY_PRODUCTS_FAILURE_ACTION',
  };
};
