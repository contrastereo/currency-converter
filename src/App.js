import './App.css';
import axios from 'axios'
import CurrencyInput from './components/CurrencyInput';
import OperationHistory from './components/OperationHistory';

function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyInput />
      <OperationHistory />

    </div>
  );
}

export default App;
