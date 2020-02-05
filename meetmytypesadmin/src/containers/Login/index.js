import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';

// Temporary inline style (so left sidebar doesn't cover form )
// Will need to utilize bootstrap for final style
var loginStyle = {
  textAlign: 'right',
};

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleLoginSubmit = async event => {
    console.log(email, password);
    event.preventDefault();
    try {
      await Auth.signIn(email, password);
      props.history.replace('/home');
    } catch (err) {
      // need to add user message
      console.log(err.message);
    }
  };

  return (
    <div style={loginStyle} className="login">
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email</label>
        <input
          autoFocus
          name="email"
          type="text"
          value={email}
          placeholder="Enter your email"
          onChange={event => setEmail(event.target.value)}
        />

        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={event => setPassword(event.target.value)}
        />
        <button disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);
