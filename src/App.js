import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
/*import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';*/

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="Signup" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

