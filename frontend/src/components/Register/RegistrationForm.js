
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import{ newReg } from '../../store/registration'
import styles from './Register.module.css'

function RegistrationForm({ spot }){
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegsistration = async (e) => {
    e.preventDefault();
    dispatch(newReg())
    history.push('/')
  }

  return (
    <div className="r">
      {/* <h2>Are you sure you want to delete this spot?</h2> */}
      <button
      onClick={() => handleRegsistration()}
      // className="confirmDeleteButton"
      >Delete</button>
    </div>
  );
}

export default RegistrationForm;
