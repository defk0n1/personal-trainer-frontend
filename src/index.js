import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes ,Route , BrowserRouter} from 'react-router-dom'
import './index.css';
import Homepage from './pages/Homepage';
import ClientsList from './components/Clients/ClientsList.js'


import reportWebVitals from './reportWebVitals';
import "./i18n.js";

import store from './store.js';
import { Provider } from 'react-redux';
import ClientProfile from './pages/ClientProfile';
import PersistLogin from './pages/PersistLogin.js';
import SignInPage from './pages/SignInPage.js';
import Test from './pages/test.js';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route element={<PersistLogin />}>
        <Route path="/profile" element={<ClientProfile />} />
        <Route path="/dashboard" element={<ClientsList />} />
        </Route>
        <Route path="/signup" element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
