import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import './app.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';


function App() {
  const user = true
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/register" replace={true} />} />
        <Route exact path="/register" element={!user ? <Register /> : <Navigate to="/" replace={true} />} />
        <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />} />
        { user && (
        <>
        <Route exact path="/movies" element={<Home type="movie" />} />
        <Route exact path="/tv-shows" element={<Home type="tv shows" />} />
        <Route exact path="/watch" element={<Watch />} />
        </>
        )  
      }
        </Routes>
    </Router>

  );
}

export default App;
