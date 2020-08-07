import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from './components/Navbar'

import LoginPanel from './components/LoginPanel';

const App = (args) => {
  console.log('args', args)
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {(args.isSignedIn) ? <Route path="/"><h1>Signed In Article Feed</h1></Route> : <Redirect to="/" />}
      </Switch>
      {/* <Route path="/login"><LoginPanel /></Route> */}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state.authentication.token)
  return {
    isSignedIn: state.authentication.token !== null && state.authentication.token !== undefined
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
