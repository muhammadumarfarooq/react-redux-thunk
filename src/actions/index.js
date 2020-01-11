import jsonplaceholder from "../apis/jsonPlaceholder";

// http://jsonplaceholder.typicode.com/posts
// http://jsonplaceholder.typicode.com/users

export const fetchPosts = async () => {
  const response = await jsonplaceholder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
