import React from 'react';
import ReactDOM from 'react-dom/client';

import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';


/*
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title1="El título" subTitle1="El subtítulo" numero={ 123 } />
    </React.StrictMode>
);
*/
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        { /* <CounterApp value={1}/> */ }
        <FirstApp title='Prueba' />
    </React.StrictMode>
);