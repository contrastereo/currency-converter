import { useContext } from "react/cjs/react.development";
import "./App.scss";
import CurrencyInput from "./components/CurrencyInput";
import CurrencyOutput from "./components/CurrencyOutput";
import { CurrencyProvider } from "./context/appContext";

function App() {

  return (
    <div className="container__wrap">
    <div className="App container">
      <CurrencyProvider>
        <h1>Currency Converter</h1>
        <CurrencyOutput/>
        <CurrencyInput />
      </CurrencyProvider>
    </div>
    </div>
  );
}

export default App;
