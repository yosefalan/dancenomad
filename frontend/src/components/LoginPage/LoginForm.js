import React, { useState } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import styles from './LoginPage.module.css'

function LoginForm({ }) {
  const sessionUser = useSelector(state => state?.session?.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(sessionActions.login({ credential, password }))
    .catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors)
        }
      })
    };

    if (sessionUser) {
      return <Redirect to="/" />;
    }

  console.log("SESSION USER:", sessionUser)

  const handleDemoLogin= (e) => {
    e.preventDefault();
    history.push('/')
    return dispatch(sessionActions.demoLogin())
  }


  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
      <img
      className={styles.form_logo}
      src={'/images/logo.png'}></img>
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
        <button
        onClick={handleDemoLogin}
        className={styles.loginSubmitButton}>Demo User</button>
        <Link to={'/signup'} id={styles.signup_link}>Sign up for Dance Nomad</Link>
      </form>
    </div>
  );
}

export default LoginForm;
