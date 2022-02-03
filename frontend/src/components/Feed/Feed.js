import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { getEvents } from "../../store/events";
import moment from 'moment'
import FilterBar from "../FilterBar/FilterBar"
import styles from './Feed.module.css'

function Feed () {

  const dispatch = useDispatch();
  const history = useHistory();
  const [linkId, setLinkId] = useState();
  const [genreFilter, setGenreFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");


  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const events = useSelector(state => Object.values(state?.events)).sort((a, b) => (a.start_date > b.start_date) ? 1 : -1)

  const handleLink = (e) => {
        e.preventDefault();
        history.push(`/events/${linkId}`)
  }

  console.log("GENRE FILTER", genreFilter)


  return (
    <>
    <FilterBar
      setGenreFilter={() => setGenreFilter()}
    />
    <div className={styles.feed_main_container}>
      <div className={styles.event_tiles_container}>
          {events?.map(event => {
            return (
              <div>
                  <div
                  onClick={(e) => setLinkId(event.id)}
                  className={styles.event_card}>
                    <div className={styles.event_img_container}>
                      <NavLink
                    to={`/events/${event?.id}`}>
                        <img className={styles.event_img} src={event?.image_url}></img>
                        </NavLink></div>
                    <NavLink className={styles.event_name_link} to={`/events/${event?.id}`}>{event?.name}</NavLink>
                    <NavLink
                    className={styles.event_date_link}
                    to={`/events/${event?.id}`}>
                    {moment(event?.end_date).format('ddd MMM D')} - {moment(event?.end_date).format('ddd MMM D yyyy')}
                    </NavLink>
                    <NavLink
                    className={styles.event_loc_link}
                    to={`/events/${event?.id}`}>
                    {event?.Venues[0]?.city},
                    {event?.Venues[0]?.state ?
                    " " :
                    null
                  }
                    {event?.Venues[0]?.state ?
                    event?.Venues[0]?.state :
                    event?.Venues[0]?.country
                  }
                    </NavLink>
                    {/* <NavLink
                    className={styles.event_loc_link}
                    to={`/events/${event?.id}`}>
                    <ul>
                    Event type: {event.event_type.map ((t) => {
                      <li>{t.type}</li>
                    })}
                    </ul>
                  </NavLink> */}
                  </div>
                </div>
            )})}
      </div>
    </div>
  </>
  )
}

export default Feed
