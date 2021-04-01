import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions/authentication';

const LogoutButton = ({ needLogin, logout }) => {
  const handleClick = () => logout();

  if (needLogin) {
    return <Redirect to="/" />;
  }

  return (
    <button onClick={handleClick}>Logout</button>
  );
};

const mapStateToProps = state => {
  return {
    needLogin: !state.authentication.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
