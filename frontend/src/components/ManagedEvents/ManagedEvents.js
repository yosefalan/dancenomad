import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/events';
import Navigation from '../Navigation/Navigation';
import styles from './ManagedEvents.module.css'


function ManagedEvents ({ user }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const events = useSelector(state => Object.values(state?.events));

  return (
    <div>
      <Navigation />
      <h1>
        Managed Events
      </h1>
      {events?.map((e) => {
        return (
          e?.hostId === user?.id ?
          <div>
            <div><p>{e?.name}</p></div>
            <div>
              <NavLink to={`/events/${e?.id}`}>Event Page</NavLink>
              <NavLink to={`/events/manage/${e.id}/registrations`}>Registrations</NavLink>
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
