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
    <div className={styles.my_regs_main}>
      <Navigation />
      <h2>Your Registrations:</h2>
      {regs?.map((reg) => {
        return (

          <div
          className={styles.reg_card}>
            <div className={styles.reg_card_info}>
              <Link
              to={`/events/${reg?.Event?.id}`}
              id={styles.reg_name}>{reg?.Event?.name}</Link>
               <Link
              to={`/events/${reg?.Event?.id}`}
               id={styles.reg_date}>{moment(reg?.Event?.start_date).format('ddd MMMM Do')} - {moment(reg?.Event?.end_date).format('ddd MMMM Do yyyy')}</Link>
               <Link
              to={`/events/${reg?.Event?.id}`}
              id={styles.reg_quantity}>Qty: {reg?.quantity}</Link>
            </div>
            <div className={styles.reg_card_img}>
              <img src={reg?.Event?.image_url}
              className={styles.reg_img}
              ></img>
            </div>
          </div>

        )
      })}
    </div>
  )
}


export default UserRegistrations
