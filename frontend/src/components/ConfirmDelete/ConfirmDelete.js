import React, { useState, useEffect } from "react";
import { destroyEvent } from '../../store/events';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import ConfirmDeleteForm from "./ConfirmDeleteForm";
import './ConfirmDelete.css'

const ConfirmDelete = ({ id }) => {
  // const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  console.log("MODAL:", showModal)

  const handleDelete = (id) => {
    dispatch(destroyEvent(id))
    history.push('/')
  }


  return (
    <>
    <button  onClick={() => handleDelete(id)}
    className="eventButtonContainer"
    id>Permanently Delete Event</button>
  </>
  )

}

export default ConfirmDelete;

// {showModal && (
//   <Modal onClose={() => setShowModal(false)}>
//     <ConfirmDeleteForm id={id} />
//   </Modal>
// )}
