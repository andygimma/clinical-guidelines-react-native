import firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;


const itemsRef = firebaseApp.database().ref().child('guidelines');

itemsRef.on('value', (snapshot) => {
  // actionCreator with snapshot
});
