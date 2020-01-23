import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions/index";

import UserHeader from "./UserHeader";

const PostList = props => {
  useEffect(() => {
    props.fetchPostsAndUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <ListGroup>
      {props.posts.map(post => (
        <ListGroup.Item key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
          <UserHeader userId={post.userId} />
          <a href={`/post/${post.id}`}>More</a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
