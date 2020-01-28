import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

// Temporary inline style (so left sidebar doesn't cover form )
// Will need to utilize boostrap for final style
var loginStyle = {
  textAlign: 'right',
};

export default class extends Component {
  state = {
    email: '',
    password: '',
  };

  onChangeEmail = event => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    });
  };

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

  handleLoginSubmit = async event => {
    event.preventDefault();
    try {
      await Auth.signIn(this.state.email, this.state.password);
      alert('logged in');
      // redirect user to /admin
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div style={loginStyle} className="login">
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email</label>
          <input
            autoFocus
            name="email"
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={this.onChangeEmail}
          />

          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={this.onChangePassword}
          />
          <button disabled={!this.validateForm()} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
