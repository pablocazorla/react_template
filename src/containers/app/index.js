import React from 'react';
import { /*Route,*/ Link } from 'react-router-dom'
// import Home from '../home'
// import About from '../about'
import AppRouter from './AppRouter';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>    
    <AppRouter/>
    <footer>
      <h2>Footer</h2>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </footer>
  </div>
);

export default App;