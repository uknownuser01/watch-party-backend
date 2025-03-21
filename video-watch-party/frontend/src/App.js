import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
import React, { useState } from "react";
import Login from "./components/Login";

function App() {
    const [user, setUser] = useState(null);

    return (
        <div>
            <h1>Watch Party</h1>
            <Login setUser={setUser} />
            {user && <p>Welcome, {user.name}!</p>}
        </div>
    );
}

export default App;
