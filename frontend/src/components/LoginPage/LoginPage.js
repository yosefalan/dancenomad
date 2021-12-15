import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm'
import styles from './LoginPage.module.css'



function LoginPage () {
  return (
    <>
      <LoginForm />
      <NavLink exact to="/signup">Sign Up</NavLink>
    </>
  )
}


export default LoginPage
