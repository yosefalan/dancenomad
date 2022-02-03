import React from "react"
import Navigation from "../Navigation/Navigation"
import Feed from "../Feed/Feed"

import styles from "./LandingPage.module.css"


function LandingPage() {
  return (
    <>
      <Navigation />
      <div className={styles.main}>
        <img
        className={styles.banner}
        src ={'images/main.png'}></img>
      </div>
      <Feed />
    </>
  )

}


export default LandingPage
