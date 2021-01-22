// Imports React - needed in any file that uses react
import React from 'react';
// Imports ReactDom - needed to render the react code to the document
import ReactDOM from 'react-dom';
// Imports code from App.js file - rendered as <App /> below
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // Strict mode gives additional warnings as you code the app
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Injecting react app in to div with id root
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
