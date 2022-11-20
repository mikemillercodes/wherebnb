import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleDemo = (e) => {
    setCredential('demo@user.io')
    setPassword('password')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(() => setShowModal(false))
      .catch(
        async (res) => {
          const data = await res.json();
          if (data.message) setErrors([data.message]);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="username-email-label">
        <input className="username-email"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
          placeholder="Username or Email"
        />
      </label>
      <label className="password-label">
        <input className="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
      </label>

      <div className="modal=buttons">
        <div className="modal-login-button">
          <button id='login-button' type="submit">Log In</button>

        </div>
        <div className="modal-demo-button">
          <button id='demo-user-button' onClick={handleDemo}>Demo User</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;