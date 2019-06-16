import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Pairing() {
  return <h1>Pairing</h1>;
}

function Ranking() {
  return <h1>Ranking</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Pairing</Link></li>
            <li><Link to="/ranking">Ranking</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
      <Route exact path='/' component={Pairing}/>
      <Route path='/ranking' component={Ranking}/>
      <Route path='/about' component={About}/>
    </Router>
  );
}

export default App;
