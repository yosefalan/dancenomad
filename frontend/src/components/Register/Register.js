import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import RegistrationForm from "./RegistrationForm";
import styles from './Register.module.css'


function Register () {

  const [showModal, setShowModal] = useState(false);



  return (
    <>
      <button
      onClick={() => setShowModal(true)}
      >Register</button>
         {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <RegistrationForm />
      </Modal>
    )}
    </>
  )
}

export default Register
