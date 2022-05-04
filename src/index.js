import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row justify-content-md-center">

        <div className="col-auto">
          <App />
        </div>
      </div>
    </div>
    
  </React.StrictMode>
);

