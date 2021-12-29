import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getEventRegs } from '../../store/registrations';
import EditRegistration from '../EditRegistration/EditRegistration';

import styles from './EventRegistrations.module.css'

function EventRegistrations () {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventRegs(id));
  }, [dispatch]);

  const regs = useSelector(state => Object.values(state?.regs));

  // const handleUpdate = () => {

  // }

  // const handleDelete = () => {

  // }

  console.log("EVENT REGS", regs)
  return (
    <div>
      <h1>Event Registrations</h1>
      {regs[0]?.map((reg)=> {
        return (
          <div>
            <div><p>Name: {reg.lastName}, {reg.firstName}</p></div>
            <div><p> Qty: {reg.quantity}</p></div>
            <div>
              <EditRegistration />
              <button>Delete Registration</button>
            </div>
          </div>
        )
      })}
    </div>


  )
}


export default EventRegistrations
