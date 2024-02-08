import './App.css';
import holberton from './holberton-logo.jpg';
import {getFullYear, getFooterCopy} from './utils.js';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
      <p>Login to access the full dashboard</p>
        <form onSubmit="">
          <label>Email:
            <input
              type="email"
              name="email"
            />
          </label>
          <br />
          <label>Password:
            <input
              type="password"
              name="password"
            />
          </label>
          <br />
          <button type="submit">OK</button>
        </form>

      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
      </div>
    </>
  );
}

export default App;