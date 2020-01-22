import _ from "lodash";
import jsonplaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);

const _fetchUser = _.memoize(async (userId, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${userId}`);

  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
});
