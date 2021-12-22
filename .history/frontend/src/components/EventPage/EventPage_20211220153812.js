import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getEvent } from "../../store/events";
import { format } from 'date-fns'
import moment from 'moment'
import styles from './EventPage.module.css'


function EventPage () {
  const id = useParams().id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch]);

  const event = useSelector(state => Object.values(state?.events))[0];
  const genres = [event?.event_genre.map(g => g.genre)]
  console.log("ID@@@@@@@@@@@@@@@@@@@", event.start_date)
  const start_date = moment(event?.start_date).format(, 'MMMM d yyyy')
  moment().format("MMM Do YY");

  return (
    <>
      <h1>Event Page</h1>
      <img src={event?.image_url}></img>
      <p>{event?.name}</p>
      <p>{event?.description}</p>
      <p>Dates:

      </p>
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