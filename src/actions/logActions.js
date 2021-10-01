import {
  GET_LOGS,
  DELETE_LOG,
  SET_CURRENT,
  UPDATE_LOG,
  ADD_LOG,
  SEARCH_LOGS,
  SET_LOADING,
  LOGS_ERROR,
} from './types';

// Get logs from the server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch(
      'https://my-json-server.typicode.com/waranya-sun/json-server-db/logs'
    );
    const data = await response.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Add new log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const response = await fetch(
      'https://my-json-server.typicode.com/waranya-sun/json-server-db/logs',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(log),
      }
    );
    const data = await response.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Update the log on server
export const updateLog = (udtLog) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://my-json-server.typicode.com/waranya-sun/json-server-db/logs/${udtLog.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(udtLog),
      }
    );
    const data = await response.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Search server logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://my-json-server.typicode.com/waranya-sun/json-server-db/logs?q=${text}`
    );
    const data = await response.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Delete the log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(
      `https://my-json-server.typicode.com/waranya-sun/json-server-db/logs/${id}`,
      {
        method: 'DELETE',
      }
    );
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
