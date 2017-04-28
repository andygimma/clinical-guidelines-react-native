import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  RECEIVED_FIREBASE_DATA
} from '../constants';

const initialState = {
  // TODO get data from localStorage
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case RECEIVED_FIREBASE_DATA:
      console.log('RECEIVED_FIREBASE_DATA');
      console.log(action)
      const newState = Object.assign({}, state);
      newState.data = Object.values(action.data);
      return newState;
    default:
      return state
  }
}
