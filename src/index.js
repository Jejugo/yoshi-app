import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fb';

/* to insert Firebase to your system:
  npm install react-redux-firebase
  npm install redux-firestore

  import compose from redux to create an "enhancement"
  import reduxFirestore and getFirestore from 'redux-firestore'
  import reactReduxFirebase and getFirebase from 'react-redux-firebase'

  on the Action file add { getFirebase, getFirestore } arguments, 
  to add a document: firestore.collection('x').add({ 
    ...
    ...
    ...
  });
  
*/



const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
