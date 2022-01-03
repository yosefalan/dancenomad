import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { editEvent, getEvent, editVenue } from '../../store/events'
import EditEventForm from './EditEventForm'
import EditEventModal from './EditEventModal'
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import styles from './EditEvent.module.css'

function EditEvent () {
  const dispatch = useDispatch();
  const { id } = useParams();

 useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch]);

  const event = useSelector((state) => Object.values(state?.events))[0];


  return (
    <>
      <h1>Edit Event</h1>
      <ConfirmDelete id={id} />
      <EditEventModal event={event} />
    </>

  )
}

export default EditEvent
