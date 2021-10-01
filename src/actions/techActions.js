import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from '../actions/types';

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch(
      'https://my-json-server.typicode.com/waranya-sun/json-server-db/techs'
    );
    const data = await response.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Add technician to server
export const addTech = (newTech) => async (dispatch) => {
  try {
    const response = await fetch(
      'https://my-json-server.typicode.com/waranya-sun/json-server-db/techs',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTech),
      }
    );
    const data = await response.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Delete technician from server
export const deleteTech = (tId) => async (dispatch) => {
  try {
    await fetch(
      `https://my-json-server.typicode.com/waranya-sun/json-server-db/techs/${tId}`,
      {
        method: 'DELETE',
      }
    );
    dispatch({
      type: DELETE_TECH,
      payload: tId,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
