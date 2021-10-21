export const initialAppState = {
  loading: false,
  loaded: false,
  data: null,
};

export const appReducer = (state, action) => {

  switch (action.type) {

    case 'TEST_APP_ACTION':
      console.log('appReducer is work!');
      return state;

    default:
      return state;
  }
};
