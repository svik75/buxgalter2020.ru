import * as firebase from 'firebase/app';
import {config} from '../firebaseConfig';


firebase.initializeApp(config);
const databaseRef = firebase.database().ref();

console.log("===Firebase Intialized===");

export const todosRef = databaseRef.child('todos');