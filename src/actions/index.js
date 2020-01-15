import jsonplaceholder from "../apis/jsonPlaceholder";

// http://jsonplaceholder.typicode.com/posts
// http://jsonplaceholder.typicode.com/users

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};
