import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AccountSettingsPage from './components/AccountSettingspage';
import HomeScreenPage from './components/HomeScreenPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes >
          <Route path="/" exact element={<HomeScreenPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/account-settings" element={<AccountSettingsPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
