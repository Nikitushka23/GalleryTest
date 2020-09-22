const url =
  'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(url);
      const json = await response.json();
      setTimeout(() => {
        dispatch({type: 'FETCH_POSTS', payload: json});
        dispatch(hideLoader())
      }, 1000);
    } catch (e) {
      console.log('You lose');
      return null;
    }
  };
};

export function showLoader() {
  return {
    type: "SHOW_LOADER",
  };
}

export function hideLoader() {
  return {
    type: "HIDE_LOADER",
  };
}
