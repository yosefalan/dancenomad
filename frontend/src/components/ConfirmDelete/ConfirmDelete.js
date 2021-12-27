import React, { useState, useEffect } from "react";
import { destroyEvent } from '../../store/events';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import ConfirmDeleteForm from "./ConfirmDeleteForm";
import './ConfirmDelete.css'

const ConfirmDelete = ({ id }) => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  console.log("MODAL:", showModal)

  // const handleDelete = (id) => {
  //   dispatch(destroyEvent(id))
  //   history.push('/')
  // }


  return (
    <>
    <button onClick={() => setShowModal(true)}
    className="eventButtonContainer"
    id>Permanently Delete Event</button>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <ConfirmDeleteForm id={id} />
      </Modal>
    )}
    </>
    )

}

export default ConfirmDelete;

// {showModal && (
//   <Modal onClose={() => setShowModal(false)}>
//     <ConfirmDeleteForm id={id} />
//   </Modal>
// )}
