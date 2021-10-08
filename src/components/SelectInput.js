import React, { useState, useEffect } from "react";
import axios from "axios";

const SelectInput = (props) => {
  const baseURL =
    "https://free.currconv.com/api/v7/currencies?apiKey=f721d2ff6d2f791cb2d2";
  const [currencies, setCurrencies] = useState([]);
  // Initiating Axios
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        if (response.data.results) {
          return setCurrencies(response.data.results);
        }
      }).catch((error) => {
        console.log("error", error);
      })
    console.log(currencies)
  }, [])


  const renderCurrencies = (obj) => {
    for (let cur in obj) {
      console.log(cur)
      return (<option value={cur.id} key={cur.id}>
        {cur["currencyName"]}
      </option>)
    }
  }

  return (
    <select id="pet-select" class="animal">
      <option value="">--Please choose an option--</option>
      {renderCurrencies(currencies)}
    </select>
  );
};

export default SelectInput;
