import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Pairing from './Pairing';
import Ranking from './Ranking';

function About() {
  return <h1>About</h1>;
}

function NavBar(props) {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">NetRanker</a>
    <ul className="navbar-nav">
      <NavLink className="nav-link" activeClassName="nav-link active" exact to='/' >Pairing</NavLink>
      <NavLink className="nav-link" activeClassName="nav-link active" to='/ranking'>Ranking</NavLink>
      <NavLink className="nav-link" activeClassName="nav-link active" to='/about'>About</NavLink>
    </ul>
  </nav>
}


function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path='/' component={Pairing}/>
      <Route path='/ranking' component={Ranking}/>
      <Route path='/about' component={About}/>
    </Router>
  );
}

export default App;
