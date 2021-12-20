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

export const getEvents = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${id}`;
  if(res.ok) {
    const event = await res.json();
    console.log("$$$$$$$$$$$$ RES", event)
    dispatch(readEvent(event));
  };
}

export const getEvent = () => async (dispatch) => {
  const res = await csrfFetch('/api/events');
  if(res.ok) {
    const events = await res.json();
    console.log("$$$$$$$$$$$$ RES", events)
    dispatch(readEvents(events));
  };
}
const initialState = {};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_EVENTS: {
      const allEvents = {};
      console.log("ACTION:", action)
      action.payload.forEach(event => {
        allEvents[event.id] = event
      });
      return {...allEvents, ...state};
    }
      default:
        return state;
      }
    };

export default eventsReducer;
