import React, { useState, useEffect } from "react";
import { Modal } from '../../context/Modal';
import ConfirmDeleteRegForm from "./ConfirmDeleteRegForm";
import styles from '../EditRegistration/EditRegistration.module.css'
const ConfirmDeleteReg = ({ reg }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
      className={styles.my_events_buttons}
      onClick={() => setShowModal(true)}
      >Delete Registration</button>
         {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <ConfirmDeleteRegForm
        hideForm={() => setShowModal(false)}
        reg={reg}
        />
      </Modal>
    )}
    </>
    )

}

export default ConfirmDeleteReg;
