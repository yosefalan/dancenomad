import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import CreateEventForm from './CreateEventForm'
import styles from './CreateEvent.module.css'


const CreateEvent = () => {

  const [showModal, setShowModal] = useState(true);

  return (
    <>
    {/* <button onClick={() => setShowModal(true)}
    className={styles.my_events_buttons}
    id>Edit Event</button> */}
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <CreateEventForm hideForm={() => setShowModal(false)} />
      </Modal>
    )}
    </>
    )

}

export default CreateEvent;
