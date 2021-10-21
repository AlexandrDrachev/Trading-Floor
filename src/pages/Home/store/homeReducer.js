export const initialHomeState = {
  loading: false,
  loaded: false,
  data: null,
  error: null,
};

export const homeReducer = (state, action) => {

  switch (action.type) {

    case 'GET_CATEGORIES_REQUEST_ACTION':
      return {
        ...state,
        loading: true,
      };

    case 'GET_CATEGORIES_SUCCESS_ACTION':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };

    case 'GET_CATEGORIES_FAILURE_ACTION':
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false,
        data: null,
      };

    default:
      return state;
  }
};
