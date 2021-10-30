import logo from './logo.svg';
import './App.css';
import State from './components/State';
import StateNum from './components/StateNum';
import StateArr from './components/StateArr';

function App() {
  return (
    <div >
        < State/>
        <StateNum name="Aiman" />
        <StateArr Array={["rushba","aiman","faraj"]}/>
      
    </div>
  );
}

export default App;
