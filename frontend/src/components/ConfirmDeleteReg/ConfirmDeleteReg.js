import React, { useState, useEffect } from "react";
import { Modal } from '../../context/Modal';
import ConfirmDeleteRegForm from "./ConfirmDeleteRegForm";

import styles from './ConfirmDeleteReg.module.css'

const ConfirmDeleteReg = ({ reg }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={() => setShowModal(true)}
    className="eventButtonContainer"
    id>Delete Registration</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <ConfirmDeleteRegForm
        hideForm={() => setShowModal(false)}
        reg={reg} />
      </Modal>
    )}
    </>
    )

}

export default ConfirmDeleteReg;

// {showModal && (
//   <Modal onClose={() => setShowModal(false)}>
//     <ConfirmDeleteForm id={id} />
//   </Modal>
// )}
