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

  const event = useSelector(state => Object.values(state?.events))[0];
  console.log("ID@@@@@@@@@@@@@@@@@@@", event)

  return (
    <>
      <h1>Event Page</h1>
      <img src={event?.image_url}></img>
      <p>{event?.name}</p>
      <p>{event?.description}</p>
      <p>Location: {event?.Venue?.name}</p>
      <p>{event?.Venue?.address}</p>
      <p>{event?.Venue?.city}, {event?.Venue.state}</p>
      <p>Genres:</p>
      {/* <ul> */}
       <p> event?
        {/* {event?.event_genre.map((e) => {
          <li>{e.genre}</li>
        })} */}
      {/* </ul> */}
    </>
  )
}

export default EventPage
