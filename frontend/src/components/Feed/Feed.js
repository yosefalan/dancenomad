import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { getEvents } from "../../store/events";
import moment from 'moment'
import Select from 'react-select'
import { genre_options, type_options, country_options } from "../../data"
// import styles from "./FilterBar.module.css"
import styles from './Feed.module.css'

function Feed () {

  const dispatch = useDispatch();
  const history = useHistory();
  const [linkId, setLinkId] = useState();
  const [genreFilter, setGenreFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [countryFilter, setCountryFilter] = useState(null);


  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  let events = useSelector(state => Object.values(state?.events)).sort((a, b) => (a.start_date > b.start_date) ? 1 : -1)


    if (genreFilter){
    events = events?.filter(event => event?.event_genre?.some(({ genre }) => genre === genreFilter?.label))
    }

    if (typeFilter){
      events = events?.filter(event => event?.event_type?.some(({ type }) => type === typeFilter?.label))
      }

      if (countryFilter){
        events = events?.filter(event => event?.Venues[0]?.country === countryFilter?.label)
      }
  console.log("WOOOOOOOOOOO", events)


  const handleLink = (e, eventId) => {
        e.preventDefault();
        history.push(`/events/${eventId}`)
  }

  return (
    <>
       <div className={styles.filter_main}>
        <Select
            className={styles.filter_genre}
            // defaultValue={genres}
            onChange={setGenreFilter}
            isClearable={true}
            options={genre_options}
            placeholder="Filter by Genre"
        />
           <Select
            className={styles.filter_genre}
            // defaultValue={genres}
            onChange={setTypeFilter}
            isClearable={true}
            options={type_options}
            placeholder="Filter by Event Type"
        />
           <Select
            className={styles.filter_genre}
            // defaultValue={genres}
            onChange={setCountryFilter}
            isClearable={true}
            options={country_options}
            placeholder="Filter by Country"
        />
      </div>
    <div className={styles.feed_main_container}>
      <div className={styles.event_tiles_container}>
          {
          events

          .map(event => {
            return (
              <div>
                  <div
                  onClick={(e) => handleLink(e, event.id)}
                  className={styles.event_card}>
                    <div className={styles.event_img_container}>
                        <img className={styles.event_img} src={event?.image_url}></img>
                        </div>
                      <div className={styles.event_card_text}>
                      <h4>{event?.name}</h4>
                    <span>{moment(event?.end_date).format('ddd MMM D')} - {moment(event?.end_date).format('ddd MMM D yyyy')}</span>
                    <p>{event?.Venues[0]?.city},

                     {event?.Venues[0]?.state ?
                     ` ${event?.Venues[0]?.state}` :
                     ` ${event?.Venues[0]?.country}`
                  }
                  </p>
                  <p>Genres:</p>
                    {event?.event_genre.map((g, idx ) => {

                      return <span>{idx > 0 ? " | " : null}{g.genre}</span>
                    })}
                      <p>Event Type:</p>
                       {event?.event_type.map((t, idx ) => {

                        return <span>{idx > 0 ? " | " : null}{t.type}</span>
                        })}
                    </div>
                  </div>
                </div>
            )})}
      </div>
    </div>
  </>
  )
}

export default Feed
