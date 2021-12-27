import EditEventForm from './EditEventForm'
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import { useParams } from 'react-router-dom'
import styles from './EditEvent.module.css'

function EditEvent ({ event }) {

  const { id } = useParams();

  return (
    <>
      <h1>Edit Event</h1>
      <EditEventForm event={event} />
      <ConfirmDelete id={id} />
    </>

  )
}

export default EditEvent
