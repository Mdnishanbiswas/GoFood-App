import './App.css';
import React, { useState } from 'react';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    setLoggedIn(true); // Update login status in parent component
  };

  const handleLogout = () => {
    // Implement logout logic here
    setLoggedIn(false); // Update login status in parent component
  };

  return (
    <Router>
      <div>
        {/* Pass handleLogin as prop to Login component */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
