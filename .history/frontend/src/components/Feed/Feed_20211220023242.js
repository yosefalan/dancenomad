import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getEvents } from "../../store/events";
import styles from './Feed.module.css'

function Feed () {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const events = useSelector(state => Object.values(state?.events));

  return (

    <div className={styles.feed_main_container}>
      <h1>fEEd</h1>
      <div className={styles.event_tiles_container}>
          {events?.map(event => {
              return (
                <div>
                  <div className={styles.event_tile}>
                    <div className={styles.event_img_container}><img className={styles.event_img} src={event?.image_url}></img></div>
                    <NavLink className={styles.event_name_link} to={`/events/${event?.id}`}>{event?.name}</NavLink>
                  </div>
                </div>
            )})}
      </div>
    </div>
  )
}

export default Feed
