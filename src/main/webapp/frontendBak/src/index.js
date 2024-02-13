import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './sw';

// import { register as registerServiceWorker } from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if('serviceWorker' in navigator) {
  console.log('Service worker supported');
  navigator.serviceWorker.register('/service-worker.js')
  .then(reg => {
    console.log('Service worker registered', reg);
  })
  .catch(err => {
    console.log('Service worker not registered', err);
  });
}else {
  console.log('Service worker not supported');

}
// registerServiceWorker();
// serviceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
