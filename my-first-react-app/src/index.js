import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function startApp() {
  // Create a root using ReactDOM.createRoot.
  const root = ReactDOM.createRoot(document.getElementById('root'));

  // Use root.render to render your app inside Concurrent Mode.
  root.render(<App />);
}

// Call the startApp function to render your app.
startApp();
