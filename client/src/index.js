import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import UserState from './context/UserState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserState>
      <App />
    </UserState>
  </React.StrictMode>
);


