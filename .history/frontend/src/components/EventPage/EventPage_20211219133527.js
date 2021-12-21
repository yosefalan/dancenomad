import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getEvents } from "../../store/events";
import styles from './EventPage.module.css'



function EventPage () {
  const id = useParams();

  console.log
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const events = useSelector(state => Object.values(state?.events));
  return (
    <>
      <h1>Event Page</h1>
    </>
  )
}

export default EventPage
