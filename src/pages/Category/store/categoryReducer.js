export const initialCategoryState = {
  data: null,
  loading: false,
  loaded: false,
  error: null
};

export const categoryReducer = (state, action) => {

  switch (action.type) {

    case 'GET_CATEGORY_DATA_REQUEST_ACTION':
      return {
        ...state,
        loading: true,
      };

    case 'GET_CATEGORY_DATA_SUCCESS_ACTION':
      return {
        ...state,
        loading: false,
        data: action.payload,
        loaded: true,
        error: null,
      };

    case 'GET_CATEGORY_FAILURE_ACTION':
      return {
        ...state,
        data: null,
        loading: false,
        loaded: false,
        error: action.payload,
      };

    case 'RETURN_TO_DEFAULT_ACTION':
      return initialCategoryState;

    default:
      return state;
  }
};
