import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login({ handleLogin }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      console.log(json);

      if (json.success) {
        handleLogin(); // Call handleLogin upon successful login
        navigate('/'); // Navigate to homepage upon successful login
      } else {
        setError("Invalid Credentials");
      }
    } catch (error) {
      setError(error.message);
      console.error('Failed to fetch:', error);
    }
  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <div className='container' style={{ color: 'white' }}>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={credentials.email} onChange={onChange} style={{ backgroundColor: 'black', color: 'white' }} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange} style={{ backgroundColor: 'black', color: 'white' }} />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
        <Link to="/signup" className="m-3 btn btn-danger">New User? Signup</Link>
      </form>
    </div>
  );
}
