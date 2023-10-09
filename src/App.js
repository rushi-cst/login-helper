import React from 'react'
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RequestReset from './components/RequestReset';
import ResetPassword from './components/ResetPassword';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/request-reset" element={<RequestReset />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  </Router>
);

export default App;
