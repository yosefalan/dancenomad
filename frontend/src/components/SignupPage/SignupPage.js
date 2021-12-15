import { NavLink } from 'react-router-dom';
import SignupForm from './SignupForm'
import styles from './SignupPage.module.css'



function SignupPage () {
  return (
    <>
      <SignupForm />
      <NavLink exact to="/login">Log In</NavLink>
    </>
  )
}


export default SignupPage
