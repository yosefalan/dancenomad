import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import{ newReg } from '../../store/registrations'
import moment from 'moment'
import Select from 'react-select'

function EditRegistrationForm({ event }){
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const start_date = moment(event?.start_date).format('ddd MMMM Do')
  const end_date = moment(event?.end_date).format('ddd MMMM Do yyyy')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [quantity, setQuantity] = useState(null);
  const handleReg = async (e) => {
    e.preventDefault();
    dispatch(newReg({
      eventId :id,
      userId: sessionUser.id,
      quantity: +quantity.value,
      firstName,
      lastName,
    }))
    // history.push('/')
  }

  const quantity_options = [
    { value: "1", label: '1' },
    { value: "2", label: '2' },
    { value: "3", label: '3' },
    { value: "4", label: '4' },
    { value: "5", label: '5' },
    { value: "6", label: '6' },
    { value: "7", label: '7' },
    { value: "8", label: '8' },
    { value: "9", label: '9' },
    { value: "10", label: '10' },
  ]

  return (
    <div>
      <form
        onSubmit={handleReg}
      >
        <h2>{event?.name}</h2>
        <h2>{start_date} - {end_date}</h2>
        <input
            type="text"
            className="field"
            placeholder="First Name"
            autocomplete="new-password"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
            <input
            type="text"
            className="field"
            placeholder="Last Name"
            autocomplete="new-password"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
          <Select
            defaultValue={quantity}
            onChange={setQuantity}
            options={quantity_options}
            placeholder="Quantity"
            />
        <button
          type="submit"
        >Register</button>
      </form>
    </div>
  );
}

export default EditRegistrationForm;
