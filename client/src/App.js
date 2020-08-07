import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
import { connect, useSelector } from 'react-redux'
import { Navbar } from './components/Navbar'
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
      <Navbar />
      <div>{(needLogin) ? <h1>UnSigned Page</h1> : <h1>Signed In</h1>}</div>
      <Switch>
      </Switch>
      {/* <Route path="/login"><LoginPanel /></Route> */}
    </BrowserRouter>
  );
}
{/* {(args.isSignedIn) ? <Route path="/"><h1>Signed In Article Feed</h1></Route> : <Redirect to="/" />} */ }


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

