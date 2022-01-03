import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/events';
import Navigation from '../Navigation/Navigation';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';
import EditEventModal from '../EditEvent/EditEventModal'
import moment from 'moment'
import styles from './ManagedEvents.module.css'


function ManagedEvents ({ user }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const events = useSelector(state => Object.values(state?.events));

  let myEvents = 0
  events.map((e) => {
    if (e.hostId === user.id) myEvents +=1
  })

  return (
    <div className={styles.my_regs_main}>
      <Navigation />
      <h1>
        Your Events
      </h1>
      {myEvents === 0 ?
      <div className={styles.my_regs_main}>
      <h2>You don't have any events yet: </h2>
      <Link to={'/events/manage/create'}>Create your first event here</Link></div> :
      events?.map((event) => {
        return (
          event?.hostId === user?.id ?
          <div className={styles.reg_card}>
            <div className={styles.reg_card_info}>
              <Link
                to={`/events/${event?.id}`}
                id={styles.reg_name}>{event?.name}</Link>
              <Link
                to={`/events/${event?.id}`}
                id={styles.reg_date}>{moment(event?.start_date).format('ddd MMMM Do')} - {moment(event?.end_date).format('ddd MMMM Do yyyy')}</Link>
               <div className={styles.my_events_buttons_container}>
              <NavLink to={`/events/manage/${event.id}/registrations`}>
                <button
                className={styles.my_events_buttons}
                >Registrations</button>
              </NavLink>
              {/* <NavLink
              to={`/events/manage/edit/${event.id}`}>
                <button
                className={styles.my_events_buttons}
                >Edit Event</button>
              </NavLink> */}
              <EditEventModal event={event} />
              <ConfirmDelete id={event.id} user={user}/>
              </div>
            </div>

            <div className={styles.reg_card_img}>
            <img src={event?.image_url}
              className={styles.reg_img}
              ></img>
            </div>
            <div></div>
          </div>
          : null
        )
      })}

    </div>

  )

}

export default ManagedEvents
