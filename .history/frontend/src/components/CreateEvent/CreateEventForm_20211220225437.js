import styles from './CreateEvent.module.css'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CreateEventForm () {


  // const userId = sessionUser.id
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [venue, setVenue] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [errors, setErrors] = useState([]);
  const [images, setImages] = useState([]);

  return (
    <h1>Create Event Form</h1>

  )
}

export default CreateEventForm
