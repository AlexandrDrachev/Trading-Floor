export const initialProductState = {
  loading: false,
  loaded: false,
  data: null,
  error: null,
};

export const productReducer = (state, action) => {
  switch (action.type) {

    case 'GET_PRODUCT_DATA_REQUEST_ACTION':
      return {
        ...state,
        loading: true,
      };

    case 'GET_PRODUCT_DATA_SUCCESS_ACTION':
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
        error: null,
      };

    case 'GET_PRODUCT_DATA_FAILURE_ACTION':
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.payload,
      };

    case 'RETURN_TO_DEFAULT_PRODUCT_STATE_ACTION':
      return initialProductState;

    default:
      return state;
  }
};
