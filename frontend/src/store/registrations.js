import { csrfFetch } from "./csrf";

const READ_REGS = "registrations/readRegs";
const READ_REG = "registrations/readReg";
const CREATE_REG = "registrations/creatReg";
const UPDATE_REG = "registrations/updateReg";
const DELETE_REG = "registrations/deleteReg";

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
    payload: reg,
  };
};

const deleteReg = (id) => {
  return {
    type: DELETE_REG,
    id
  };
};

export const getRegs = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/registrations/users/${userId}/`);
  if (res.ok) {
    const regs = await res.json();
    dispatch(readRegs(regs));
  }
};

export const getEventRegs = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/registrations/events/${id}/`);
  if (res.ok) {
    const regs = await res.json();
    dispatch(readRegs(regs));
  }
};

export const getReg = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/registrations/${id}`);
  if (res.ok) {
    const reg = await res.json();
    dispatch(readReg(reg));
  }
};

export const newReg = (data) => async (dispatch) => {
  const res = await csrfFetch("/api/registrations/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const reg = await res.json();
    dispatch(createReg(reg));
    return reg;
  }
};

export const editReg = (data, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/registrations/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const reg = await response.json();
    dispatch(updateReg(reg));
    return reg;
  }
};


export const removeReg = id => async dispatch => {
  const response = await csrfFetch(`/api/registrations/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    dispatch(deleteReg(id));
  }
};

const initialState = {};

const regsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_REGS: {
      return action.payload.reduce((regs, reg) => {
        regs[reg.id] = reg;
        return regs;
      }, {});
    }
    case UPDATE_REG: {
      const newState = { ...state };
      for (let key in newState) {
        if (newState[key].id === action.payload.id) {
          newState[key] = action.payload;
        }
      }
      return newState;
    }
    case DELETE_REG: {
      delete state[action.id];
      const newState = { ...state };
      return newState;
    }
    default:
      return state;
  }
};

export default regsReducer;
