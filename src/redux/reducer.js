const initialState = {
  posts: [],
  loading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {...state, posts: action.payload};
      case "SHOW_LOADER":
        return {
          ...state,
          loading: true,
        };
      case "HIDE_LOADER":
        return {
          ...state,
          loading: false,
        };
    default:
      return state;
  }
};
