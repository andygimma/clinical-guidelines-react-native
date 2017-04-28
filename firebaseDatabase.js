import {
  receivedFirebaseData
} from './actions';

import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();

export default database;

//
// const itemsRef = firebaseApp.database().ref().child('guidelines');
//
// export function watchGuidelineAddedEvent(dispatch) {
//   database.ref('/guidelines').on('child_added', (snap) => {
//     dispatch(receivedFirebaseData(snap.val()));
//   });
// }
