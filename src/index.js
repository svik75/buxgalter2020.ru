import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import createStore from './createStore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history'
import {firebaseConfig} from './config/firebaseConfig';
import rootReducer from './reducer';


const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};



firebase.initializeApp(firebaseConfig);
firebase.firestore();

const history = createBrowserHistory();
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

localStorage.clear();

ReactDOM.render( 
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <Router history={history}>
    <App/>
  </Router>,
  </ReactReduxFirebaseProvider>,
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export {history};