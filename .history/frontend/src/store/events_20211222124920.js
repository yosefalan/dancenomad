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

  const res = await csrfFetch('/api/events/');
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
    hostId,
    name,
    description,
    start_date,
    end_date,
    venue,
    venue_types,
    address,
    city,
    state,
    zip,
    country,
    lat,
    lng,
    genres,
    types,
    image,
    video
   } = event;
   console.log("$$$$$$$$$$$$$$$$$$$", Array.isArray(genres))
   const genres = JSON.stringify(genres)
   const formData = new FormData();
   formData.append("hostId", hostId);
   formData.append("name", name);
   formData.append("description", description);
   formData.append("start_date", start_date);
   formData.append("end_date", end_date);
   formData.append("venue", venue);
   formData.append("venue_types", venue_types);
   formData.append("address", address);
   formData.append("city", city);
   formData.append("state", state);
   formData.append("zip", zip);
   formData.append("country", country);
   formData.append("lat", lat);
   formData.append("lng", lng);
   formData.append("genres", genres);
   formData.append("types", types);
  //  if (image) formData.append("image", image);
  //  if (video) formData.append("video", video);

  const g = formData.get("genres")
  console.log("WOOOOOHOOOOOOO", typeof g)
  const res = await csrfFetch('/api/events/', {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
    })

  if(res.ok) {
    const event = await res.json();
    console.log("$$$$$$ RES OK $$$$$", event)
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
