import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getEvent } from "../../store/events";
import { format } from 'date-fns'
import styles from './EventPage.module.css'

// var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')

function EventPage () {
  const id = useParams().id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch]);

  const event = useSelector(state => Object.values(state?.events))[0];
  const genres = [event?.event_genre.map(g => g.genre)]
  console.log("ID@@@@@@@@@@@@@@@@@@@", genres)

  return (
    <>
      <h1>Event Page</h1>
      <img src={event?.image_url}></img>
      <p>{event?.name}</p>
      <p>{event?.description}</p>
      <p>Dates:
      {format(event?.start_date, 'MMMM d YYYY')
      }</p>
      <p>Location: {event?.Venue?.name}</p>
      <p>{event?.Venue?.address}</p>
      <p>{event?.Venue?.city}, {event?.Venue.state}</p>
      <p>Genres:</p>
      <p>
      {event?.event_genre?.map((g) => {
        return(
          <ul>
            <li>{g.genre}</li>
          </ul>
      )})}
      </p>
      <p>Event by: {event?.User?.username}</p>
    </>
  )
}

export default EventPage
