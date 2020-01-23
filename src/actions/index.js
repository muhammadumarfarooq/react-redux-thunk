import _ from "lodash";
import jsonplaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const posts = getState().posts;
  const usersId = _.uniq(_.map(posts, "userId"));
  usersId.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${userId}`);

  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

// Memoized version of code *** Not Understood Fully ***
// export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${userId}`);

//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// });
