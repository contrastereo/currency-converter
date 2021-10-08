import "./App.scss";
import CurrencyInput from "./components/CurrencyInput";
import OperationHistory from "./components/OperationHistory";
import { CurrencyProvider } from "./context/appContext";

function App() {
  return (
    <div className="App container">
      <CurrencyProvider>
        <h1>Currency Converter</h1>
        <CurrencyInput />
        <OperationHistory />
      </CurrencyProvider>
    </div>
  );
}

export default App;
