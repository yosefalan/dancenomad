import styles from './CreateEvent.module.css'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newEvent } from '../../store/events'

function CreateEventForm () {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session?.user);
  const userId = sessionUser.id
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStart_date] = useState(null);
  const [end_date, setEnd_date] = useState(null);
  const [venue, setVenue] = useState("");
  const [venue_type, setVenue_type] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [genres, setGenres] = useState("");
  const [types, setTypes] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    const newEvent = dispatch(newEvent({
      userId,
      name,
      description,
      start_date,
      end_date,
      venue,
      venue_type,
      city,
      state,
      country,
      lat,
      lng,
      genres,
      types,
      image,
      video
    }))
    // .then(() => {
    //   setName(""),
    //   setDescription("");
    //   setStart_date(null);
    //   setEnd_date(null);
    //   setVenue("");
    //   setVenue_type(null);
    //   setCity("");
    //   setState("")
    //   setCountry("");
    //   setLat(null);
    //   setLng(null);
    //   setGenres(null);
    //   setTypes(null);
    //   setImage_url("");
    //   setVideo_url("");
    // })
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
        setErrors(newErrors);
      }
      });
    }

    const updateImageFile = (e) => {
      const file = e.target.file
      setImage(file);
    };

    const updateVideoFile = (e) => {
      const file = e.target.file
      setVideo(file);
    };



  return (
    <h1>Create Event Form</h1>
  )
}

export default CreateEventForm
