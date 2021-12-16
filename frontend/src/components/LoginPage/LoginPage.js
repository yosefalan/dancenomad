import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm'
import styles from './LoginPage.module.css'

function LoginPage () {
  return (
    <div className={styles.loginMain}>
      <div className={styles.loginLeft}>
        <LoginForm />
        <NavLink exact to="/signup">Sign Up</NavLink>
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
