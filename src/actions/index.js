import jsonplaceholder from "../apis/jsonPlaceholder";

// http://jsonplaceholder.typicode.com/posts
// http://jsonplaceholder.typicode.com/users

export const fetchPosts = () => {
  jsonplaceholder
    .get("/posts")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  return {
    type: "FETCH_POSTS"
  };
};
