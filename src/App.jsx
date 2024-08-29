import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TeamDetails from './components/TeamDetails';  // Ensure this is imported

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/team-details" element={<TeamDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
