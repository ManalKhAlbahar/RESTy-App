'use strict';

const initialState = {
  method: [],
  URL: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_METHOD':
      return {
        ...state,
        method: action.payload,
      };
    case 'SET_URL':
      return {
        ...state,
        URL: action.payload,
      };
    default:
      return state;
  }
}

export const setMethod = (method) => {
  return {
    type: 'SET_METHOD',
    payload: method,
  };
};

export const setURL = (URL) => {
  return {
    type: 'SET_URL',
    payload: URL,
  };
};
