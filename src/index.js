/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
registerServiceWorker();*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = configureStore({
  reducer: rootReducer,
 Middleware: [thunk]
});

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

registerServiceWorker();
