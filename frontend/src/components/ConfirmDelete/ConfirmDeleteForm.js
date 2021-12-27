import { destroyEvent } from '../../store/events';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// import '../LoginFormModal/form.css';
import './ConfirmDelete.css'

function ConfirmDelete({ id, setShowModal }){
  // const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // setShowModal(true)

  const handleDelete = (id) => {
    dispatch(destroyEvent(id))
    history.push('/')
  }

  return (
    <div className="confirmDeleteContainer">
      <h2>Are you sure you want to permanently delete this event?</h2>
      <button
      onClick={() => handleDelete(id)}
      className="confirmDeleteButton"
      >Delete</button>
    </div>
  );
}

export default ConfirmDelete;
