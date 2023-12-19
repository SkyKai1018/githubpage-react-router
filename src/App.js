import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Contact us at example@email.com</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/githubpage-react-router">Home</Link>
          </li>
          <li>
            <Link to="/githubpage-react-router/about">About</Link>
          </li>
          <li>
            <Link to="/githubpage-react-router/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/githubpage-react-router" element={<Home />} />
        <Route path="/githubpage-react-router/about" element={<About />} />
        <Route path="/githubpage-react-router/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
