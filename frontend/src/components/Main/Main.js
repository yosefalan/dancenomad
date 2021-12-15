import React from "react"
import styles from "./Main.module.css"


function Main() {
  return (
    <>
      <h1>Main</h1>
      <div className={styles.main}>
        <img
        className={styles.banner}
        src ={'images/main.png'}></img>
      </div>
    </>
  )

}


export default Main
