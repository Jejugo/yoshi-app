import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
/*used to SYNC data from firestore to Application state. It already knows how to connect to firestore because of 
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig) 
on index.js */
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
});

export default rootReducer;