import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterUseEffect from './components/CounterUseEffect';
import StateShareWithProblem from './components/StateShareWithProblem';
import StateShareWithContext from './components/StateShareWithContext';
import StoreStateBetweenRender from './components/StoreStateBetweenRender';
import StateWithreducer from './components/StateWithreducer';
import StateWithReducerObject from './components/StateWithReducerObject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateWithReducerObject/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
