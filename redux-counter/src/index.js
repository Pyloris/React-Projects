import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {Provider} from 'react-redux';
import myReducers from './reducers';
import {legacy_createStore as createStore} from 'redux';


const myStore = createStore(myReducers);

myStore.subscribe(()=>console.log(myStore.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={myStore}><App/></Provider>
);
