import { destroyEvent } from '../../store/events';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import styles from './CreateEvent.module.css'

function ConfirmCancel({ id, hideForm, user }){

  const dispatch = useDispatch();
  const history = useHistory();

  const handleCancel = () => {
     history.push('/');
      hideForm();
  }

  const handleContinue = () => {
     hideForm();
 }


  return (
    <div
      className={styles.confirm_delete_container}>
      <h2>Are you sure you want to cancel event creation?</h2>
      <p>Your changes will not be saved</p>
      <div className={styles.event_cancel_buttons}>
        <button
        onClick={() => handleCancel()}
        className={styles.confirm_delete_button_2}
        >Cancel</button>
          <button
        onClick={() => handleContinue()}
        className={styles.confirm_delete_button_2}
        >Don't Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmCancel;
