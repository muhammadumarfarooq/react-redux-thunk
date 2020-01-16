import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ userId, fetchUser, user: users }) => {
  useEffect(() => {
    fetchUser(userId);

    //eslint-disable-next-line
  }, []);

  return users !== null ? <h2>{/* {user.name} {userId} */}</h2> : `...`;
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
