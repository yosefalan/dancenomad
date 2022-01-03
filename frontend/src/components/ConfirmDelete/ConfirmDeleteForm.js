import { destroyEvent } from '../../store/events';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import styles from './ConfirmDelete.module.css'

function ConfirmDelete({ id, hideForm }){

  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    dispatch(destroyEvent(id))
    history.push('/')
  }

  return (
    <div
      className={styles.confirm_delete_container}>
      <h2>Are you sure you want to permanently delete this event?</h2>
      <button
      onClick={() => handleDelete(id)}
      className={styles.confirm_delete_button_2}
      >Delete</button>
    </div>
  );
}

export default ConfirmDelete;
