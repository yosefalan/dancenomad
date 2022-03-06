import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getManagedEvents } from '../../store/events';
import ProfileButton from '../ProfileButton/ProfileButton';
import styles from './Navigation.module.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session?.user);

  return (
    <div className={styles.mainNavContainer}>
      <div className={styles.centerNavContainer}>
           <div className={styles.hamburger}>
              <i class="fa fa-solid fa-bars fa-3x"></i>
              <div className={styles.dropdownContent}>


                {sessionUser ?
                <div className={styles.navBarRight}>
                  <div className={styles.navBarLink}>
                  <NavLink exact to="/maps"
                  className={styles.navBarLinkText}
                  >Map</NavLink>
                </div>
                <div className={styles.navBarLink}>
                  <NavLink exact to="/calendar"
                  className={styles.navBarLinkText}
                  >Calendar</NavLink>
                </div>
                <div className={styles.navBarLink}>
                  <NavLink exact to="/events/manage/create"
                  className={styles.navBarLinkText}
                  >Create Event</NavLink>
                </div>
              {/* <div> */}
                <ProfileButton user={sessionUser} />
              {/* </div> */}

              </div>
              : <div className={styles.linksContainer}>
                {/* <div
                className={styles.navBarLink}>
                <NavLink exact to="/login/manage"
                className={styles.navBarLinkText}
                >Create Event</NavLink></div> */}
                <div
                className={styles.dropDownLink}>
                <NavLink exact to="/login"
                className={styles.navBarLinkText}
                >Log In</NavLink></div>
                </div>
                }

              </div>
            </div>

        <div className={styles.homeLogo}>
          <NavLink exact to="/"><img className={styles.navLogo} src={'/images/logo.png'}></img></NavLink>
        </div>




        {sessionUser ?
        <div className={styles.navBarRight}>
             <div className={styles.navBarLink}>
            <NavLink exact to="/maps"
            className={styles.navBarLinkText}
            >Map</NavLink>
          </div>
           <div className={styles.navBarLink}>
            <NavLink exact to="/calendar"
            className={styles.navBarLinkText}
            >Calendar</NavLink>
          </div>
          <div className={styles.navBarLink}>
            <NavLink exact to="/events/manage/create"
            className={styles.navBarLinkText}
            >Create Event</NavLink>
          </div>
          {/* <div> */}
            <ProfileButton user={sessionUser} />
          {/* </div> */}

        </div>
        : <div className={styles.linksContainer}>
          {/* <div
          className={styles.navBarLink}>
          <NavLink exact to="/login/manage"
          className={styles.navBarLinkText}
          >Create Event</NavLink></div> */}
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
