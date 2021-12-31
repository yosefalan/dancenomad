import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getEvent } from "../../store/events";
import { format } from 'date-fns'
import Register from '../Register/Register'
import Navigation from '../Navigation/Navigation'
import moment from 'moment'
import styles from './EventPage.module.css'


function EventPage () {
  const id = useParams().id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch]);

  const event = useSelector(state => Object.values(state?.events))[0];
  const genres = [event?.event_genre?.map(g => g.genre)]
  const types = [event?.event_type?.map(t => t.type)]
  const start_date = moment(event?.start_date).format('MMMM Do')
  const end_date = moment(event?.end_date).format('MMMM Do yyyy')

  console.log("EVENT", event)

  return (
    <>
    <Navigation />
    <div className={styles.bg}><img
    className={styles.bg_img}
    src={event?.image_url}></img></div>
    <div className={styles.event_page_main}>
      <div className={styles.event_page_top}>
        <div className={styles.event_page_top_left}>
          <img
          className={styles.event_img}
          src={event?.image_url}></img>
        </div>
        <div className={styles.event_page_top_right}>
          <p>{event?.name}</p>
          <p>{start_date} to {end_date}</p>
          <p>Event by: {}</p>
        </div>
      </div>
      <div className={styles.event_page_middle}>
        <div className={styles.event_page_middle_left}></div>
        <div className={styles.event_page_middle_right}>
           <Register event={event}/>
        </div>
      </div>
      <div className={styles.event_page_bottom}>
        <div className={styles.event_page_bottom_left}>
          <p>{event?.description}</p>
          <p>Location: {event?.Venue?.name}</p>
          <p>{event?.Venue?.address}</p>
          <p>{event?.Venue?.city}, {event?.Venue?.state}</p>
          <p>Genres:</p>
          <p>
          {event?.event_genre?.map((g) => {
            return(
              <ul>
                <li>{g.genre}</li>
              </ul>
          )})}
          </p>
          <p>Event Type:</p>
          <p>
          {event?.event_type?.map((t) => {
            return(
              <ul>
                <li>{t.type}</li>
              </ul>
          )})}
          </p>
          <p>Event by: {event?.User?.username}</p>
        </div>
        <div className={styles.event_page_bottom_right}>
        </div>
      </div>
    </div>
    </>
  )
}

export default EventPage
