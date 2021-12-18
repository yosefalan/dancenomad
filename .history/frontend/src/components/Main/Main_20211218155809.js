import React from "react"
import Navigation from '../Navigation/Navigation'
import styles from "./Main.module.css"


function Main() {
  return (
    <>
      <Navigation />
      <div className={styles.main}>
        <img
        className={styles.banner}
        src ={'images/main.png'}></img>
      </div>
      <
    </>
  )

}


export default Main
