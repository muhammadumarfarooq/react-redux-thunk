import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ userId, fetchUser, users }) => {
  useEffect(() => {
    fetchUser(userId);
    //eslint-disable-next-line
  }, []);

  const user = users.find(user => user.id === userId);
  if (!user) return null;

  return <h6>{user.name}</h6>;
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
