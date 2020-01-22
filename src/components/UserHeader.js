import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ userId, fetchUser, user }) => {
  useEffect(() => {
    fetchUser(userId);
    //eslint-disable-next-line
  }, []);

  console.log(user);

  if (!user) return null;

  return <h6>{user.name}</h6>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
