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
    console.log("$$$$$$$$$$$$ EVENTS:", events)
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

const initialState = {};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_EVENTS: {
      const allEvents = {};
      action.payload.forEach(event => {
        allEvents[event.id] = EventBridge
      });
      console.log("!!!!!!!!!!!!!!!!!!" allEvents)
      return {...allEvents, ...state};
    }
    // case READ_EVENT: {
    //   console.log("ACTION:", action)
    //   const event = action.payload;
    //   return {event, ...state};
    // }
      default:
        return state;
      }
    };

export default eventsReducer;
