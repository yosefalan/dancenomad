import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import * as sessionActions from "../../store/session";
import styles from './ProfileButton.module.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <div className={styles.userLinks}>
      <div className={styles.buttonContainer}
      // onClick={openMenu}>
      >
        <div className={styles.profileImageContainer}>
        {user
        ? user.url
        ? <img src={user.url} className={styles.profileImage}></img>
        : <i class="fas fa-user-circle"></i>
        : <i class="fas fa-user-circle"></i>
      }
        </div>
          <div className={styles.dropdownContent}>
            {user ?
            <>
              <Link
              className="pb_links"
              onClick={logout} to={'/'}>
              Log Out
              </Link>
              <Link
              className="pb_links"
              to={`/registrations/users/${user.id}`}>
              Registrations</Link>
              <Link
              className="pb_links"
              to={'/events/manage/all'}>
              Manage Events</Link>
            </>
              :
              <div className={styles.modalLinks}>
              </div>
              }
          </div>
      </div>
      <p className={styles.userText}>{user?.username}</p>

      <div className={styles.caret_container}>
      <img src="/images/caret.png" className={styles.caret}></img>
      </div>
    </div>
  );
}

export default ProfileButton;
