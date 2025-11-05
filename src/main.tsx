import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Einstiegspunkt der Anwendung
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* BrowserRouter stellt das Routing für die gesamte App bereit */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
