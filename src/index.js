import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@tremor/react/dist/esm/tremor.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);