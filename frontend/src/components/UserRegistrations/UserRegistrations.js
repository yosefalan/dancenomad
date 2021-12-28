import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRegs } from '../../store/registrations';
import Navigation from '../Navigation/Navigation'
import moment from 'moment'

import styles from './UserRegistrations.module.css'

function UserRegistrations ({ user }) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegs(user.id));
  }, [dispatch]);
  const regs = useSelector(state => Object.values(state?.regs));

  const start_date = moment(regs?.Event?.start_date).format('ddd MMMM Do')
  const end_date = moment(regs?.Event?.end_date).format('ddd MMMM Do yyyy')

  return (
    <div className="my_regs_main">
      <Navigation />
      <h1>My Registrations:</h1>
      {regs?.map((reg) => {
        return (
        <div className="reg_card">
          <div className="reg_card_info">
            <p>{reg?.Event?.name}</p>
            <p>{moment(reg?.Event?.start_date).format('ddd MMMM Do')} - {moment(reg?.Event?.end_date).format('ddd MMMM Do yyyy')}</p>
            <p>Qty: {reg?.quantity}</p>
          </div>
          <div className="reg_card_img">
            <img src={reg?.Event?.image_url}></img>
          </div>
        </div>
        )
      })}
    </div>
  )
}


export default UserRegistrations
