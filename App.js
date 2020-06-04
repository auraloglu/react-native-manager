import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyCajfeYtTssYyDJ4QmH6m0gN-P5xUD3SK0',
        authDomain: 'manager-4ecf6.firebaseapp.com',
        databaseURL: 'https://manager-4ecf6.firebaseio.com',
        projectId: 'manager-4ecf6',
        storageBucket: 'manager-4ecf6.appspot.com',
        messagingSenderId: '779276525889'
      };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
