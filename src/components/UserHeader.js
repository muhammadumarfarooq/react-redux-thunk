import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ user }) => {
  if (!user) return null;

  return <h6>{user.name}</h6>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

export default connect(mapStateToProps)(UserHeader);
