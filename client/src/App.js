import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LoginPanel from './components/LoginPanel';

function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <LoginPanel />
      <ul>This project has me messed up
        <li>its the end</li>
        <li>ive been defeated</li>
        <li>pray for me</li>
        <li>I'm going to live with my mom forever now</li>
        <li>I should have stayed a mechanic, it wasn't much, but it was honest work</li>
      </ul>
    </>
  );
}

export default App;
