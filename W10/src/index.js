import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass';
import HelloLambda from './components/HelloLambda';
import DisplayName from './components/DisplayName';
import EventComponent from './components/EventComponent';
import FormComponent from './components/FormComponent';
import Counter from './components/Counter';
import FormComponentWithState from './components/FormComponentWithState';
import FormComponentWithStateSharedHandler from './components/FormComponentWithStateSharedHandler';
import FormStateTransfer from './components/FormStateTransfer';
import Counter1 from './components/Counter1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Counter1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
