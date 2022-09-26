import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Using Atomic design & Storybook

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

