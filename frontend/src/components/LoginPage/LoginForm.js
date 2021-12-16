import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import styles from './LoginPage.module.css'

function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
    .then(history.push("/"))
    .catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
            ))}
        </ul>
          <input
            type="text"
            className={styles.loginField}
            placeholder="username or email"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
          />
          <input
            type="password"
            className={styles.loginField}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        <button type="submit" className={styles.loginSubmitButton}>Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
