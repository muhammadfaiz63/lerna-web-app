import logo from './logo.svg';
import './App.css';
import AppA from '@workspace/appa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppA/>
      </header>
    </div>
  );
}

export default App;
