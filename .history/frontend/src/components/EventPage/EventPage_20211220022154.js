import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getEvent } from "../../store/events";
import styles from './EventPage.module.css'



function EventPage () {
  const id = useParams().id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch]);

  const event = useSelector(state => Object.values(state?.events))[];
  console.log("ID@@@@@@@@@@@@@@@@@@@", event[0])

  return (
    <>
      <h1>Event Page</h1>
      <p>{event.name}</p>
    </>
  )
}

export default EventPage
