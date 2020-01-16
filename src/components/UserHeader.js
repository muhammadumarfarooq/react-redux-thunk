import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ userId, fetchUser, user }) => {
  useEffect(() => {
    fetchUser(userId);

    //eslint-disable-next-line
  }, []);

  return user !== null ? (
    <h2>
      {user.name} {userId}
    </h2>
  ) : (
    `...`
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
