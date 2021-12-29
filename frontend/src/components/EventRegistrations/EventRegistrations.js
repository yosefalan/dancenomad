import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getEventRegs } from '../../store/registrations';
import { getEvent } from "../../store/events";
import EditRegistration from '../EditRegistration/EditRegistration';
import ConfirmDeleteReg from '../ConfirmDeleteReg/ConfirmDeleteReg';
import styles from './EventRegistrations.module.css'

function EventRegistrations ({ event }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getEventRegs(id));
  }, [dispatch]);

  const regs = useSelector(state => Object.values(state?.regs));



  return (
    <div className={styles.event_regs_main}>
      <h1>Event Registrations</h1>
      {regs?.map((reg)=> {
        return (
          <div>
            <div><p>Name: {reg?.lastName}, {reg?.firstName}</p>
            <p>Username: {reg?.User?.username} </p>
            <p>Email: {reg?.User?.email}</p>
            </div>
            <div><p> Qty: {reg?.quantity}</p></div>
            <div>
              <EditRegistration reg={reg}/>
              <ConfirmDeleteReg reg={reg}/>
            </div>
          </div>
        )
      })}
    </div>


  )
}


export default EventRegistrations
