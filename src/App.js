import logo from './logo.svg';
import legend from './legend.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Images-logos" alt="logo" />
        <img src={legend} className="Images-logos Doggo" alt="Dog behind wine glass" />
        <p>
          WWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to spin!
        </a>
      <h1>Hello JSX!</h1>
      <p>This ought to be interesting</p>
      <p>Also, how tf is that icon even spinning??</p>
      </header>
    </div>
  );
}

export default App;
