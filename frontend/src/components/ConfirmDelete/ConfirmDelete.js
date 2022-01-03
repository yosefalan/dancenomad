import React, { useState, useEffect } from "react";
import { destroyEvent } from '../../store/events';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import ConfirmDeleteForm from "./ConfirmDeleteForm";
import styles from './ConfirmDelete.module.css'

const ConfirmDelete = ({ id }) => {

  const [showModal, setShowModal] = useState(false);
  console.log(id);
  
  return (
    <>
    <button onClick={() => setShowModal(true)}
    className={styles.confirm_delete_button}
    id>Delete Event</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <ConfirmDeleteForm id={id} hideForm={() => setShowModal(false)}/>
      </Modal>
    )}
    </>
    )

}

export default ConfirmDelete;
