import React, { useState } from "react";
import { signup, demoLogin } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, Link } from "react-router-dom";
import styles from "./SignupPage.module.css"

function SignupForm() {
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/main" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(signup({ username, email, password, image }))
      .then(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setImage(null);
        history.push("/")
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleDemoLogin= (e) => {
    e.preventDefault();
    history.push('/')
    return dispatch(demoLogin())
  }


  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
      <img
      className={styles.form_logo}
      src={'/images/logo.png'}></img>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
          <input
            type="text"
            autocomplete="new-password"
            className={styles.loginField}
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <input
            type="text"
            autocomplete="new-password"
            className={styles.loginField}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          <input type="file" onChange={updateFile} />
          <input autocomplete="new-password"
            type="password"
            className={styles.loginField}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          <input
           autocomplete="new-password"
            type="password"
            className={styles.loginField}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
        <button
        className={styles.loginSubmitButton}
        type="submit" id="signupSubmitButton">Create Account</button>
        <button
        onClick={handleDemoLogin}
        className={styles.loginSubmitButton}>Demo User</button>
        <Link to={'/login'}
        id={styles.login_link}
        >Already a Dance Nomad?  Log in</Link>
      </form>
    </div>
  );
}






export default SignupForm;
