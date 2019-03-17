import {
  FETCHING_SMURFS,
  FETCH_SMURF,
  SMURF_FAILURE,
  ADDING_SMURF,
  ADD_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {  
        ...state, fetchingSmurfs: true 
      };
    case FETCH_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      };
    case ADDING_SMURF:
      return { 
        ...state,
         addingSmurf: true 
        };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        addingSmurf: false
      };
    case SMURF_FAILURE:
      return {
         ...state,
         fetchingSmurfs: false,
          error: action.payload
         };
    default:
      return state;
  }
};

export default reducer;
