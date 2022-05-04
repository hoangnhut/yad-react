import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="container">
      <div class="row justify-content-md-center">

        <div class="col-auto">
          <App />
        </div>
      </div>
    </div>
    
  </React.StrictMode>
);

