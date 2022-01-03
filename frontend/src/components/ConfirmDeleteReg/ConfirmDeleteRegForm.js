import { removeReg } from '../../store/registrations';
import { useDispatch } from 'react-redux';
import styles from '../EditRegistration/EditRegistration.module.css'

function ConfirmDeleteRegForm ({ reg, hideForm}) {

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeReg(id));
    hideForm();
  }
  console.log("REG", reg)
  return (
    <div className={styles.confirm_delete_reg}>
      <h2>Are you sure you want to permanently delete this registration?</h2>
      <button
      className={styles.delete_reg_button}
      onClick={() => handleDelete(reg?.id)}
      >Delete</button>
    </div>
  );
}

export default ConfirmDeleteRegForm;
