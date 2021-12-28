import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getManagedEvents, getEvents } from '../../store/events';
import Navigation from '../Navigation/Navigation';
import styles from './ManagedEvents.module.css'


function ManagedEvents ({ user }) {
  const dispatch = useDispatch();
  // const events = useSelector(state => Object.values(state?.events));

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getManagedEvents(user?.id));
  // }, [dispatch]);


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
          <p>{e.name}</p> :
          null
        )
      })}
    </div>

  )

}

export default ManagedEvents
