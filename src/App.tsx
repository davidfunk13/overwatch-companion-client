import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'https://overwatch-companion.herokuapp.com/api/users';
    const req = fetch(url).then(data => data.json());

    req.then(data => setData(data));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {data.map((data: any) => {
          return (
            <div key={data.id}>
              <p>{data.id}</p>
              <p>{data.battletag}</p>
              <p>{data.identifier}</p>
            </div>
          )
        })}
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
