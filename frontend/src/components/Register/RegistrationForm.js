import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { newReg } from "../../store/registrations";
import moment from "moment";
import Select from "react-select";
import styles from "./Register.module.css";

function RegistrationForm({ event, hideForm }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const start_date = moment(event?.start_date).format("ddd MMMM Do");
  const end_date = moment(event?.end_date).format("ddd MMMM Do yyyy");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [errors, setErrors] = useState(null);

  console.log("QQQQQQQQQQQ", quantity)
  const handleReg = async (e) => {
    e.preventDefault();
    const errors = []
    if (!firstName?.length) errors.push("First name is required")
    if (!lastName?.length) errors.push("Last name is required")
    if (!quantity?.value) errors.push("Quantity is required")
    setErrors(errors)
    if (!errors.length) {
      const data = {
        eventId: id,
        userId: sessionUser.id,
        quantity: +quantity.value,
        firstName,
        lastName,
      }
      const new_reg = dispatch(newReg(data))
      if (new_reg) {
      history.push(`/registrations/users/${id}`)
      hideForm();
      }
    }
  };

  const quantity_options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  return (
    <div className={styles.reg_main}>
      <form className={styles.reg_form} onSubmit={handleReg}>
        <ul className={styles.errors_ul}>
          {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <h2 className={styles.reg_h2}>{event?.name}</h2>
        <h2 className={styles.reg_h2}>
          {start_date} - {end_date}
        </h2>
        <input
          type="text"
          className={styles.reg_field}
          placeholder="First Name"
          autocomplete="new-password"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className={styles.reg_field}
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
        <button className={styles.reg_button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
