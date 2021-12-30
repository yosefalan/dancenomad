import { NavLink, useHistory, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm'
import styles from './LoginPage.module.css'

function LoginPage ({ sessionUser }) {
  const history = useHistory();

  if (sessionUser) return <Redirect to="/" />;

  return (
    <div className={styles.loginMain}>
      <div className={styles.loginLeft}>
        {/* <div className={styles.form_logo_container}><img
        className={styles.form_logo}
        src={'/images/logo.png'}></img></div> */}
        <LoginForm sessionUser={sessionUser} />
      </div>
      <div className={styles.loginRight}>
        <img src={'images/ab.png'}
        className={styles.loginImg}
        ></img>
      </div>
    </div>
  )
}

export default LoginPage
