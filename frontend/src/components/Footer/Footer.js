import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer_div}>
        {/* <div className={styles.footer_info}> */}
          <p>Created by: Joseph Nackman</p>
          <a href="https://github.com/yosefalan/"><img  className={styles.gLogo} src={'/images/githubLogo.png'}></img></a>
          <a href="https://www.linkedin.com/in/joseph-nackman/">
          <img className={styles.lLogo}  src={'/images/linkedInLogo.png'}></img>
          </a>
        {/* </div> */}
    </div>
  );
};


export default Footer;
