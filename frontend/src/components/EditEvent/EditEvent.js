import styles from './EditEvent.module.css'
import EditEventForm from './EditEventForm'

function EditEvent ({ event }) {

  return (
    <>
      <h1>Edit Event</h1>
      <EditEventForm event={event} />
    </>

  )
}

export default EditEvent
