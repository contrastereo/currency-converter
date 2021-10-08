import React, { useContext } from "react";
import SelectInput from "./SelectInput";
import { currencyContext } from "../context/appContext";

const CurrencyInput = () => {
  const { fieldData, setFieldData } = useContext(currencyContext);

  const handleDynamicChange = (key) => (event) => {
    setFieldData((prevValues) => ({
      ...prevValues,
      [key]: event.target.value,
    }));
  };

  return (
    <div className="currency__input">
      <input
        className=" currency__input__localInput"
        type="text"
        onChange={handleDynamicChange("localCoin")}
        value={fieldData.localCoin}
      />
      <SelectInput className="currency__input__localSelect" />

      <button
        onClick={() => {
          handleDynamicChange("localCoin")({
            target: { value: fieldData.foreingCoin },
          });
          handleDynamicChange("foreingCoin")({
            target: { value: fieldData.localCoin },
          });
        }}
      >
        {" "}
        swap{" "}
      </button>
      <input
        className="currency__input__foreingInput"
        type="text"
        onChange={handleDynamicChange("foreingCoin")}
        value={fieldData.foreingCoin}
      />
      <SelectInput className="currency__input__foreingSelect" />
    </div>
  );
};
export default CurrencyInput;
