import { csrfFetch } from './csrf';

const READ_REGS = 'registrations/readRegs';
const READ_REG = 'registrations/readReg';
const CREATE_REG = 'registrations/creatReg';
const UPDATE_REG = 'registrations/updateReg';
const DELETE_REG = 'registrations/deleteReg';

const readRegs = (regs) => {
  return {
    type: READ_REGS,
    payload: regs,
  };
};

const readReg = (reg) => {
  return {
    type: READ_REG,
    payload: reg,
  };
};

const createReg = (reg) => {
  return {
    type: CREATE_REG,
    payload: reg,
  };
};

const updateReg = (reg) => {
  return {
    type: UPDATE_REG,
    payload: reg
  };
};

const deleteReg = () => {
  return {
    type: DELETE_REG,
  };
};

export const getRegs = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/registrations/`);
  if(res.ok) {
    const regs = await res.json();
    dispatch(readRegs(regs));
  };
}

export const getReg = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/registrations/${id}`);
  if(res.ok) {
    const reg = await res.json();
    dispatch(readReg(reg));
  };
}


export const newReg = (data) => async (dispatch) => {
  const res = await csrfFetch('/api/registrations/', {
    method: "POST",
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  if(res.ok) {
    const reg = await res.json();
    dispatch(createReg(reg));
    return reg
  };
}

// export const editEvent = (data, id) => async dispatch => {
//   console.log("THUNK DATA!", data)
//   const response = await csrfFetch(`/api/events/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify(data)
//   })
//   if(response.ok) {
//     const event = await response.json();
//     dispatch(updateEvent(event))
//     return event
//   }
// }

// export const editVenue = (data, id) => async dispatch => {
//   console.log("THUNK DATA!", data)
//   const response = await csrfFetch(`/api/events/${id}/venue`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify(data)
//   })
//   if(response.ok) {
//     const venue = await response.json();
//     dispatch(updateEvent(venue))
//     return venue
//   }
// }

// export const destroyEvent = id => async dispatch => {
//   console.log("DESTROY EVENT THUNK")
//   const response = await csrfFetch(`/api/events/${id}`, {
//     method: 'DELETE',
//   });
//   if (response.ok) {
//     dispatch(deleteEvent(id));
//   }
// };


const initialState = {};

const regsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
    return state;
  }
}
//   switch (action.type) {
//     case READ_EVENTS: {
//       const allEvents = {};
//       action.payload.forEach(event => {
//         allEvents[event.id] = event
//       });
//       return {...allEvents, ...state};
//     }
//     case READ_EVENT: {
//       const event = action.payload;
//       return {[action.payload.id]: action.payload }
//     }
//     case CREATE_EVENT: {
//       return { ...state, [action.payload.id]: action.payload }
//     }
//       default:
//         return state;
//       }
//     };

export default regsReducer;
