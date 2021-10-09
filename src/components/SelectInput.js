import React, { useState, useEffect } from "react";
import axios from "axios";

const SelectInput = (props) => {
  const propValue= props.propValue
  const handler= props.handler
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
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <select value={propValue} onChange={handler}>
      <option >--Please choose an option--</option>
      {Object.keys(currencies).map((property) => (
        <option
          value={currencies[property]["id"]}
          key={currencies[property]["id"]}
        >
          {currencies[property]["currencyName"]}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
