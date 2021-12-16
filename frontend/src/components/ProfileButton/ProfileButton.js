import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import styles from './ProfileButton.module.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
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
  };

  return (
    <div className={styles.userLinks}>
      <div className={styles.buttonContainer}
      onClick={openMenu}>
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
              <a onClick={logout} href="/">
              Log Out
              </a> :
              <div className={styles.modalLinks}>
              </div>
              }
          </div>
      </div>
      <p className={styles.userText}>{user?.username}</p>
      {/* <img src="/images/caret.svg" className={styles.caret}></img> */}
    </div>
  );
}

export default ProfileButton;
