import React, { useContext } from "react";
import SelectInput from "./SelectInput";
import { currencyContext } from "../context/appContext";
import axios from "axios";

const CurrencyInput = () => {
  const { fieldData, setFieldData, history, setHistory} = useContext(currencyContext);
  
  async function onSubmit(event) {
    event.preventDefault();
    const requestURL=(local, foreing)=>{
      return  (`https://free.currconv.com/api/v7/convert?q=${local}_${foreing},${foreing}_${local}&compact=ultra&apiKey=f721d2ff6d2f791cb2d2`)
    }
    const currentRequest =(local, foreing)=>{
      return `${local}_${foreing}`
    }

    const handleResults =(res)=>{
      setFieldData((prevValues) => ({
        ...prevValues,
        "foreingCoin": (parseInt(fieldData.localCoin) * res),
      }));
    }
    await  axios
        .get(requestURL(fieldData.localCoinSelection, fieldData.foreingCoinSelection))
        .then((response) => {
          console.log(response.data[`${currentRequest(fieldData.localCoinSelection, fieldData.foreingCoinSelection)}`])
          if (response.data) {
             handleResults(response.data[`${currentRequest(fieldData.localCoinSelection, fieldData.foreingCoinSelection)}`]);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
        setHistory(prevValues => [...prevValues, fieldData])
    }

  const handleDynamicChange = (key) => (event) => {
    setFieldData((prevValues) => ({
      ...prevValues,
      [key]: event.target.value,
    }));
  };

  return (
    <form onSubmit={e => onSubmit(e)} className="currency__input">
      <input
        className=" currency__input__localInput"
        type="text"
        onChange={handleDynamicChange("localCoin")}
        value={fieldData.localCoin}
      />
      <SelectInput className="currency__input__localSelect" handler={handleDynamicChange("localCoinSelection") } propValue={fieldData.localCoinSelection}/>

      <button
        onClick={() => {
          handleDynamicChange("localCoin")({
            target: { value: fieldData.foreingCoin },
          });
          handleDynamicChange("foreingCoin")({
            target: { value: fieldData.localCoin },
          });
          handleDynamicChange("localCoinSelection")({
            target: { value: fieldData.foreingCoinSelection },
          });
          handleDynamicChange("foreingCoinSelection")({
            target: { value: fieldData.localCoinSelection },
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
      <SelectInput className="currency__input__foreingSelect" handler={handleDynamicChange("foreingCoinSelection")} propValue={fieldData.foreingCoinSelection}/>
      <button type="submit"> Submit</button>

    </form>
  );
};
export default CurrencyInput;
