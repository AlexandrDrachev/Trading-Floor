export const initialAuthState = {
  userRole: 'user',
  user: null,
  loading: false,
  logged: false,
  error: null,
};

export const authReducer = (state, action) => {

  switch (action.type) {

    case 'USER_AUTHORISATION_REQUEST_ACTION':
      return {
        ...state,
        loading: true,
      };

    case 'USER_AUTHORISATION_SUCCESS_ACTION':
      return {
        ...state,
        loading: false,
        user: action.payload,
        userRole: action.payload.userRole,
        logged: true,
      };

    case 'USER_AUTHORISATION_FAILURE_ACTION':
      return {
        ...state,
        loading: false,
        user: null,
        userRole: 'user',
        logged: false,
        error: action.payload,
      };

    case 'USER_REGISTRATION_REQUEST_ACTION':
      return {
        ...state,
        loading: true,
      };

    case 'USER_REGISTRATION_SUCCESS_ACTION':
      return {
        ...state,
        loading: false,
        user: action.payload,
        logged: true,
      };

    case 'USER_REGISTRATION_FAILURE_ACTION':
      return {
        ...state,
        loading: false,
        user: null,
        logged: false,
        error: action.payload,
      };

    case 'LOGOUT_ACTION':
      return initialAuthState;

    default:
      return state;
  }
};
