import { removeReg } from '../../store/registrations';
import { useDispatch } from 'react-redux';

import styles from './ConfirmDeleteReg.module.css'

function ConfirmDeleteRegForm ({ reg, hideForm}) {

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeReg(id));
    hideForm();
  }

  return (
    <div className="confirmDeleteContainer">
      <h2>Are you sure you want to permanently delete this registration?</h2>
      <button
      onClick={() => handleDelete(reg.id)}
      className="confirmDeleteButton"
      >Delete</button>
    </div>
  );
}

export default ConfirmDeleteRegForm;
