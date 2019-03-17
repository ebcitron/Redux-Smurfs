import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCH_SMURF = 'FETCH_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_FAILURE = 'SMURF_FAILURE';

export const addSmurf = smurf => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    dispatch({ 
      type: ADDING_SMURF 
    })
    newSmurf
      .then(response  => {
        dispatch({
           type: ADD_SMURF, payload: response.data
           })
      })
      .catch( error => {
        dispatch({
           type: SMURF_FAILURE, payload: error
          })
      })
  };
}

export const fetchingSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({
       type: FETCHING_SMURFS
      });
    smurfs
      .then( response => {
        dispatch({
           type: FETCH_SMURF, payload: response.data 
          })
      })
      .catch( error => {
        dispatch({
           type: SMURF_FAILURE, payload: error
          })
      })
  };
}

