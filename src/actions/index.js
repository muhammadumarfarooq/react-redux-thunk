import _ from "lodash";
import jsonplaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

// export const fetchUser = userId => async dispatch => {
//   const response = await jsonplaceholder.get(`/users/${userId}`);

//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// };

export const fetchUser = function(userId) {
  return _.memoize(async function(dispatch) {
    const response = await jsonplaceholder.get(`/users/${userId}`);

    dispatch({
      type: "FETCH_USER",
      payload: response.data
    });
  });
};
