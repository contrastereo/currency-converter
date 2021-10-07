import React, { useContext, useState } from "react";
import SelectInput from "./SelectInput";
import { currencyContext } from "../context/appContext";

const CurrencyInput = () => {
  const { localCoin, setLocalCoin, foreingCoin, setForeingCoin } =
    useContext(currencyContext);
  const [fieldData, setFieldData] = useState({});

  const handleClick = () => {
    console.log(localCoin);
    console.log(foreingCoin);
    setFieldData({ local: localCoin, foreing: foreingCoin });
    console.log(fieldData);
    setLocalCoin(fieldData.foreing);
    setForeingCoin(fieldData.local);
  };

  return (
    <div className="currency__input">
      <input
        className="currency__input__localInput"
        type="text"
        onChange={(event) => {
          setLocalCoin(event.target.value);
        }}
        value={localCoin}
      />
      <SelectInput className="currency__input__localSelect" />

      <button onClick={() => handleClick()}> swap </button>
      <input
        className="currency__input__foreingInput"
        type="text"
        onChange={(event) => {
          setForeingCoin(event.target.value);
        }}
        value={foreingCoin}
      />
      <SelectInput className="currency__input__foreingSelect" />
    </div>
  );
};
export default CurrencyInput;
