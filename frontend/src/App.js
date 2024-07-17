import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { useState } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
    console.log('Token received:', token);
  };

  return (
    <Router>
      <div>
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
