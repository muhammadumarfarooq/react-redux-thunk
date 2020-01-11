import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
const PostList = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <h1>Post List</h1>
    </div>
  );
};

export default connect(null, { fetchPosts })(PostList);
