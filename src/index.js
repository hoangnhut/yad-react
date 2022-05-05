import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Profile from './routers/profile'

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-auto">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<App />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

