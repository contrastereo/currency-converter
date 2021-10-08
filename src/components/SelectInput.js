import React, { useState, useEffect} from "react";
import axios from "axios";

const SelectInput = (props) => {
  const baseURL =
    "https://free.currconv.com/api/v7/currencies?apiKey=f721d2ff6d2f791cb2d2";
  const [currencies, setCurrencies] = useState([]);
  // Initiating Axios
  const getData = () => {
     axios
      .get(baseURL)
      .then((response) => {
        if (response.data.results) {
          return setCurrencies(response.data.results);
        } else {
          return console.log(response);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <select id="pet-select" class>
      <option value="">--Please choose an option--</option>
      {Object.entries(currencies).map((item) => (
        <option value={item.id} key={item.id}>
          {item["currencyName"]} 
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
