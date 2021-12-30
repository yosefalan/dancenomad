import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import{ editReg } from '../../store/registrations'
import moment from 'moment'
import Select from 'react-select'
import styles from './EditRegistration.module.css'

function EditRegistrationForm({ event, reg, hideForm }){
  // const { id } = useParams();
  const id = reg?.id
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const start_date = moment(event?.start_date).format('ddd MMMM Do')
  const end_date = moment(event?.end_date).format('ddd MMMM Do yyyy')

  const [firstName, setFirstName] = useState(reg?.firstName);
  const [lastName, setLastName] = useState(reg?.lastName);
  const [quantity, setQuantity] = useState(reg?.quantity);
  const updateFirstName = (e) => setFirstName(e?.target?.value);
  const updateLastName = (e) => setLastName(e?.target?.value);
  const updateQuantity = (e) => setQuantity(e?.target?.value);

  const handleEditReg = async (e) => {
    e.preventDefault();
    dispatch(editReg({
      eventId: reg?.eventId,
      userId: reg?.userId,
      firstName,
      lastName,
      quantity,
    }, id))

    hideForm()
  }
  // console.log("REGSSSSS", reg, 'QUANTITY', quantity)

  // const quantity_options = [
  //   { value: "1", label: '1' },
  //   { value: "2", label: '2' },
  //   { value: "3", label: '3' },
  //   { value: "4", label: '4' },
  //   { value: "5", label: '5' },
  //   { value: "6", label: '6' },
  //   { value: "7", label: '7' },
  //   { value: "8", label: '8' },
  //   { value: "9", label: '9' },
  //   { value: "10", label: '10' },
  // ]
  console.log("EVENT NAME", event)
  return (
    <div>
      <form
        className={styles.edit_reg_form}
        onSubmit={handleEditReg}>
        <h2>{event?.name}</h2>
        {/* <h2>{start_date} - {end_date}</h2> */}
        <input
            type="text"
            className={styles.edit_reg_form_field}
            placeholder="First Name"
            autocomplete="new-password"
            value={firstName}
            onChange={updateFirstName}
            />
            <input
            type="text"
            className={styles.edit_reg_form_field}
            placeholder="Last Name"
            autocomplete="new-password"
            value={lastName}
            onChange={updateLastName}
            />
            <input
            type="text"
            className={styles.edit_reg_form_field}
            placeholder="Quantity"
            autocomplete="new-password"
            value={quantity}
            onChange={updateQuantity}
            />
          {/* <Select
            defaultValue={quantity}
            onChange={updateQuantity}
            options={quantity_options}
            placeholder="Quantity"
            /> */}
        <button
          className={styles.my_events_buttons}
          type="submit"
        >Update</button>
      </form>
    </div>
  );
}

export default EditRegistrationForm;
