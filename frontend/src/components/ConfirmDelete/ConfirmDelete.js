import React, { useState, useEffect } from "react";
import { destroyEvent } from '../../store/events';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import ConfirmDeleteForm from "./ConfirmDeleteForm";
import styles from './ConfirmDelete.module.css'

const ConfirmDelete = ({ id }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={() => setShowModal(true)}
    className={styles.my_events_buttons}
    id>Delete Event</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <ConfirmDeleteForm id={id} />
      </Modal>
    )}
    </>
    )

}

export default ConfirmDelete;
