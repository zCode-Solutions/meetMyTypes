import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // might want better validation with messages
  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = event => {
    // just logging to console for now
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
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
}
