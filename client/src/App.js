import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';

import LoginPanel from './components/LoginPanel';

function App(args) {
  console.log('args', args)
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"><h1>Hello world!</h1></Route>
      </Switch>
      <Route path="/login"><LoginPanel /></Route>
      {/*       
      <ul>This project has me messed up
        <li>its the end</li>
        <li>ive been defeated</li>
        <li>pray for me</li>
        <li>I should have stayed a mechanic, it wasn't much, but it was honest work</li>
        <li>I'm going to live with my mom forever now</li>
      </ul> */}
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
