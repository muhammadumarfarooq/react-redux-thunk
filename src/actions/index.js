import jsonplaceholder from "../apis/jsonPlaceholder";

// http://jsonplaceholder.typicode.com/posts
// http://jsonplaceholder.typicode.com/users

export const fetchPosts = () => {
  return function(dispatch, getState) {
    const response = jsonplaceholder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response
    });
  };
};
