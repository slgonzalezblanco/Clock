
import './App.css';
import CountDown from './componets/CountDown';
import Digital from './componets/Digital';
import StopWatch from './componets/StopWatch';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Digital></Digital>
        <CountDown></CountDown>
        <StopWatch></StopWatch>
      </header>
    </div>
  
  );
}

export default App;
