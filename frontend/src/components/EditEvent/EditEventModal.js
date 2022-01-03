import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import EditEventForm from "./EditEventForm";
import styles from './EditEvent.module.css'

const EditEvent = ({ event }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={() => setShowModal(true)}
    className={styles.my_events_buttons}
    id>Edit Event</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <EditEventForm event={event} hideForm={() => setShowModal(false)}/>
      </Modal>
    )}
    </>
    )

}

export default EditEvent;
