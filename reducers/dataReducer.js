import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  RECEIVED_FIREBASE_DATA,
  SHOW_GUIDELINE,
  SHOW_LIST
} from '../constants';

const initialState = {
  // TODO get data from localStorage
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  showGuideline: false,
  guideline: {}
}

export default function dataReducer (state = initialState, action) {
  const newState = Object.assign({}, state);

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
      newState.data = Object.values(action.data);
      return newState;
    case SHOW_GUIDELINE:
      newState.showGuideline = true;
      newState.guideline = action.data
      return newState
    case SHOW_LIST:
      newState.showGuideline = false;
      newState.guideline = {}
      return newState
    default:
      return state
  }
}
