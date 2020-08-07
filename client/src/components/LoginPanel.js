import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authentication';
import LogoutButton from './LogoutButton'

const LoginPanel = (props) => {
  const { needLogin } = props

  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const updateEmail = e => setEmail(e.target.value);
  const updatePassword = e => setPassword(e.target.value);


  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword} />
        {(needLogin) ? <button type="submit">Login</button> : <LogoutButton />}
      </form>
    </div>
  );
};

export default LoginPanel;
