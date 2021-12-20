import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getEvents } from "../../store/events";
import styles from './EventPage.module.css'



function EventPage () {
  const id = useParams().id;

  console.log("ID@@@@@@@@@@@@@@@@@@@", id)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents(id));
  }, [dispatch]);

  const events = useSelector(state => Object.values(state?.events));
  return (
    <>
      <h1>Event Page</h1>
    </>
  )
}

export default EventPage
