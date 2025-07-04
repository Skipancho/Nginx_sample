import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getHello } from './data/api';

function App() {
  const [hello, setHello] = useState<string>('');

  useEffect(() => {
    getHello().then((response) => {
      setHello(response.message);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>{hello}</p>
      </header>
    </div>
  );
}

export default App;
