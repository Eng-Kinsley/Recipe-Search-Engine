import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App.js';

/*ReactDOM.render(<App />, document.getElementById('root'));*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);