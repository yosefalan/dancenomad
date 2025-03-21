import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import { getEvents } from "../../store/events";
import moment from 'moment'
import Select from 'react-select'
import { genre_options, type_options, months, country_options } from "../../data"
import Navigation from "../Navigation/Navigation";
import styles from './Calendar.module.css'

function Calendar () {

  const date = new Date();
  const currentYear = date.getFullYear();
  const nextYear  = currentYear + 1;

  const year_options = [
    { value: currentYear, label: currentYear },
    { value: nextYear, label: nextYear  },
  ]
  const dispatch = useDispatch();
  const history = useHistory();
  const [linkId, setLinkId] = useState();
  const [genreFilter, setGenreFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [countryFilter, setCountryFilter] = useState(null);
  const [year, setYear] = useState(null)


  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  let events = useSelector(state => Object.values(state?.events)).sort((a, b) => (a.start_date > b.start_date) ? 1 : -1)


    if (year) {
      events = events?.filter(event => moment(event?.start_date).format('YYYY') == year)
    }

    if (genreFilter){
    events = events?.filter(event => event?.event_genre?.some(({ genre }) => genre === genreFilter?.label))
    }

    if (typeFilter){
      events = events?.filter(event => event?.event_type?.some(({ type }) => type === typeFilter?.label))
      }

    if (countryFilter){
      events = events?.filter(event => event?.Venues[0]?.country === countryFilter?.label)
    }


  const handleLink = (e, eventId) => {
        e.preventDefault();
        history.push(`/events/${eventId}`)
  }

  return (
    <>
      <Navigation />
      <div className={styles.filter_main}>
        <Select
            className={styles.filter_genre}
            onChange={setGenreFilter}
            isClearable={true}
            options={genre_options}
            placeholder="Filter by Genre"
        />
           <Select
            className={styles.filter_genre}
            onChange={setTypeFilter}
            isClearable={true}
            options={type_options}
            placeholder="Filter by Event Type"
        />
           <Select
            className={styles.filter_genre}
            onChange={setCountryFilter}
            isClearable={true}
            options={country_options}
            placeholder="Filter by Country"
        />
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
                      <div
                      onClick={(e) => handleLink(e, event.id)}
                      className={styles.reg_card}>
            <div className={styles.reg_card_img}>
            <img src={event?.image_url}
              className={styles.reg_img}
              ></img>
            </div>
            <div className={styles.reg_card_info}>
              <Link
                to={`/events/${event?.id}`}
                id={styles.reg_name}>{event?.name}</Link>
              <Link
                to={`/events/${event?.id}`}
                id={styles.reg_date}>{moment(event?.start_date).format('ddd MMMM Do')} - {moment(event?.end_date).format('ddd MMMM Do yyyy')}</Link>
               <div className={styles.my_events_buttons_container}>
              </div>
            </div>
            <div></div>
          </div>
                    )
                  })}
                 </div>
              </div>
        )})}
  </>
  )
}

export default Calendar
