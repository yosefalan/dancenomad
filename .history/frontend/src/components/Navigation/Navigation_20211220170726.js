import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton';
import styles from './Navigation.module.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <SignupFormModal />
  //     </>
  //   );
  // }

  return (
    <div className={styles.mainNavContainer}>
      <div className={styles.centerNavContainer}>
        <div className={styles.homeLogo}>
          <NavLink exact to="/"><img className={styles.navLogo} src={'images/logo.png'}></img></NavLink>
        </div>
        {sessionUser ?
        <div className={styles.navBarRight}>
          <div className={styles.navBarLink}>
            <NavLink exact to="/login/manage"
            className={styles.navBarLinkText}
            >Create Event</NavLink>
          </div>
          <div>
            <ProfileButton user={sessionUser} />
            <p className={styles.userText}>{sessionUser?.username}</p>
          </div>
        </div>
        : <div className={styles.linksContainer}>
          <div
          className={styles.navBarLink}>
          <NavLink exact to="/login/manage"
          className={styles.navBarLinkText}
          >Create Event</NavLink></div>
          <div
          className={styles.navBarLink}>
          <NavLink exact to="/login"
          className={styles.navBarLinkText}
          >Log In</NavLink></div>
        </div>
            }
      </div>
    </div>
  );
}

export default Navigation;
