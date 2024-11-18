import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes ,Route , BrowserRouter} from 'react-router-dom'
import './index.css';
import Homepage from './pages/Homepage.jsx';
import ClientsList from './components/Clients/ClientsList.jsx'


import reportWebVitals from './reportWebVitals.js';
import "./i18n.js";

import store from './store.js';
import { Provider } from 'react-redux';
import ClientProfile from './pages/ClientProfile.jsx';
import PersistLogin from './pages/PersistLogin.jsx';
import SignInPage from './pages/SignInPage.jsx';
import Test from './pages/test.jsx';
import SearchWorkout from './components/Admin/Workout/SearchWorkout.jsx';









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
        <Route path="/test" element={<SearchWorkout/>}></Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
