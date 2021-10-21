export const initialShoppingCartState = {
  loading: false,
  data: [],
  error: null,
};

export const shoppingCartReducer = (state, action) => {

  switch (action.type) {

    case 'ADD_PRODUCT_ACTION':
      console.log('data: ', state.data);
      return {
        ...state,
        data: action.payload,
      };

    case 'PAY_PRODUCTS_REQUEST_ACTION':
      return {
        ...state,
        loading: true,
      };

    case 'PAY_PRODUCTS_SUCCESS_ACTION':
      return {
        ...state,
        loading: false,
        data: [],
        error: null,
      };

    case 'PAY_PRODUCTS_FAILURE_ACTION':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
