import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { getEvents } from "../../store/events";
import moment from 'moment'
import Select from 'react-select'
import { genre_options, type_options, months } from "../../data"
import Navigation from "../Navigation/Navigation";
import styles from './Calendar.module.css'

function Calendar () {

  const date = new Date();
  const currentYear = date.getFullYear();

  const dispatch = useDispatch();
  const history = useHistory();
  const [linkId, setLinkId] = useState();
  const [genreFilter, setGenreFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [countryFilter, setCountryFilter] = useState(null);
  const [year, setYear] = useState(currentYear)

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  let events = useSelector(state => Object.values(state?.events)).sort((a, b) => (a.start_date > b.start_date) ? 1 : -1)

    events = events?.filter(event => moment(event?.start_date).format('YYYY') == year)

    if (genreFilter){
    events = events?.filter(event => event?.event_genre?.some(({ genre }) => genre === genreFilter?.label))
    }

    if (typeFilter){
      events = events?.filter(event => event?.event_type?.some(({ type }) => type === typeFilter?.label))
      }

  console.log("WOOOOOOOOOOO", events)


  const handleLink = (e, eventId) => {
        e.preventDefault();
        history.push(`/events/${eventId}`)
  }

  return (
    <>
      <Navigation />
      <div className={styles.main}>
        <img
        className={styles.banner}
        src ={'images/main.png'}></img>
      </div>

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
            onChange={setTypeFilter}
            isClearable={true}
            options={type_options}
            placeholder="Filter by Country"
        />
      </div>
      <div className={styles.calendar_format}>
        <span>{currentYear}</span><span>{currentYear + 1}</span>
        </div>
        {Object.values(months).map(month => {
            return (
              <div className={styles.month}>
                 <div className={styles.month_border}><span>{month.label}</span></div>
                 <div className={styles.calendar_events}>
                  {events
                  .filter(event => moment(event?.start_date).format('MMMM') == month.label)
                  .map(event => {
                    return (
                      <p>event</p>
                    )
                  })}
                 </div>
              </div>
        )})}






        {/* <div className={styles.month}>
          <div className={styles.month_border}><span>January</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>February</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>March</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>April</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>May</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>June</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>July</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>August</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>September</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>October</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>November</span></div>
        </div>
        <div className={styles.month}>
          <div className={styles.month_border}><span>December</span></div>
        </div> */}




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
                    " " :
                    null
                  }
                    {event?.Venues[0]?.state ?
                    event?.Venues[0]?.state :
                    event?.Venues[0]?.country
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

export default Calendar
