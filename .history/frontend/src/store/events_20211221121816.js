import { EventBridge } from 'aws-sdk';
import { csrfFetch } from './csrf';

const READ_EVENTS = 'events/readEvents';
const READ_EVENT = 'events/readEvent';
const CREATE_EVENT = 'events/creatEvent';
const UPDATE_EVENT = 'events/updateEvent';
const DELETE_EVENT = 'events/deleteEvent';

const readEvents = (events) => {
  return {
    type: READ_EVENTS,
    payload: events,
  };
};

const readEvent = (event) => {
  return {
    type: READ_EVENT,
    payload: event,
  };
};

const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
};

const updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
};

const deleteEvent = () => {
  return {
    type: DELETE_EVENT,
  };
};

export const getEvents = () => async (dispatch) => {

  const res = await csrfFetch('/api/events');
  if(res.ok) {
    const events = await res.json();
    dispatch(readEvents(events));
  };
}

export const getEvent = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${id}`);
  if(res.ok) {
    const event = await res.json();
    dispatch(readEvent(event));
  };
}


export const newEvent = (event) => async (dispatch) => {

  const {
    userId,
    name,
    description,
    start_date,
    end_date,
    venue,
    venue_type,
    city,
    state,
    country,
    lat,
    lng,
    selectedGenres,
    selectedTypes,
    image,
    video

   } = user;
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);


  const res = await csrfFetch(`/api/events/`);
  if(res.ok) {
    const event = await res.json();
    dispatch(createEvent(event));
  };
}


const initialState = {};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_EVENTS: {
      const allEvents = {};
      action.payload.forEach(event => {
        allEvents[event.id] = event
      });
      return {...allEvents, ...state};
    }
    case READ_EVENT: {
      const event = action.payload;
      return {[action.payload.id]: action.payload }
    }
      default:
        return state;
      }
    };

export default eventsReducer;
