import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import SignUpPage from './components/SignUpPage'
import { loadToken } from './actions/authentication';

const App = ({ needLogin, loadToken }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, [loadToken]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Navbar needLogin={needLogin} />
      <div>{(needLogin) ? <SignUpPage /> : <h1>Signed In</h1>}</div>
      <Switch>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    needLogin: !state.authentication.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadToken: () => dispatch(loadToken()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  App
);

