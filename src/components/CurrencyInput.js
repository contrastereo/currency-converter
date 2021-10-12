import React, { useContext } from "react";
import SelectInput from "./SelectInput";
import { currencyContext } from "../context/appContext";
import axios from "axios";

const CurrencyInput = () => {
  const { fieldData, setFieldData} = useContext(currencyContext);
  
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
        "foreingCoin": ((parseInt(fieldData.localCoin) * res)).toFixed(2),
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
      <div className=" currency__input__options">
      <SelectInput title='From' className="currency__input__localSelect" handler={handleDynamicChange("localCoinSelection") } propValue={fieldData.localCoinSelection}/>
      <button className="currency__input__btn"
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
Swap
      </button>
      <SelectInput title="To" className="currency__input__foreingSelect" handler={handleDynamicChange("foreingCoinSelection")} propValue={fieldData.foreingCoinSelection}/>
      </div>
      
      <button type="submit" className="currency__input__submit"> Submit</button>

    </form>
  );
};
export default CurrencyInput;
