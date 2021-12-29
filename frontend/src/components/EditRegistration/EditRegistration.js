import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import EditRegistrationForm from "./EditRegistrationForm";
import styles from './EditRegistration.module.css'



function EditRegistration ({ event, reg }) {

  const [showModal, setShowModal] = useState(false);



  return (
    <>
      <button
      onClick={() => setShowModal(true)}
      >Edit Registration</button>
         {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <EditRegistrationForm
        hideForm={() => setShowModal(false)}
        event={event} reg={reg}/>
      </Modal>
    )}
    </>
  )
}

export default EditRegistration
