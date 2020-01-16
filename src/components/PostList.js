import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";

import UserHeader from "./UserHeader";

const PostList = props => {
  useEffect(() => {
    props.fetchPosts();
    // eslint-disable-next-line
  }, []);

  console.log(props.posts);
  return (
    <ListGroup>
      {props.posts.map(post => (
        <ListGroup.Item key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
          <UserHeader userId={post.userId} />
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

export default connect(mapStateToProps, { fetchPosts })(PostList);
