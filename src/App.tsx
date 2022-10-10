import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';

import HomePage from './pages/home/home-page';
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home">Play Now</Link>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
