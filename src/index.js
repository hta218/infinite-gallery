import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Components/Login';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import GalleryContainer from './Stores/GalleryContainer';
import AppContainer from './Stores/AppContainer';
import { Router } from "@reach/router"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer.Provider>
      <GalleryContainer.Provider>
        <Router>
          <App path='/' />
          <Login path='/login' />
        </Router>
        <ToastContainer autoClose={3000} />
      </GalleryContainer.Provider>
    </AppContainer.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
