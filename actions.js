import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  RECEIVED_FIREBASE_DATA
} from './constants';

import getPeople from './api';

import database from './firebaseDatabase';

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}

export function receivedFirebaseData(data) {
  return (dispatch) => {
    type: RECEIVED_FIREBASE_DATA,
    data
  }
}

export function watchGuidelineAddedEvent(dispatch) {
  database.ref('/guidelines').on('value', (snap) => {
    dispatch(guidelineAddedAction(snap.val()));
  });
}

function guidelineAddedAction(data) {
  return {
    type: RECEIVED_FIREBASE_DATA,
    data
  };
}
