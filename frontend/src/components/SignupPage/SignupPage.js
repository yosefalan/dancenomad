import { NavLink } from 'react-router-dom';
import SignupForm from './SignupForm'
import styles from './SignupPage.module.css'

function SignupPage () {
  return (
    <div className={styles.loginMain}>
      <div className={styles.loginLeft}>
        <SignupForm />
        {/* <NavLink exact to="/signup">Sign Up</NavLink> */}
      </div>
      <div className={styles.loginRight}>
        <img src={'images/su.jpg'}
        className={styles.loginImg}
        ></img>
      </div>
    </div>
  )
}

export default SignupPage
