import React, { useState } from "react";
import axios from "axios";

const SelectInput = (props) => {
  const baseURL =
    "https://v6.exchangerate-api.com/v6/bc16b6bf1a1ccfa42befc5ac/latest/USD";
  const [currencies, setCurrencies] = useState([]);
  // Initiating Axios
  const getData = () => {
    axios
      .get(baseURL)
      .then((response) => {
        if (response.data["conversion_rates"]) {
          return setCurrencies(response.data["conversion_rates"]);
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
      {/* {Object.entries(currencies).map((item) => (
        <option value={item.id} key={item.id}>
          {item.currencyName} 
        </option>
      ))}*/}
    </select>
  );
};

export default SelectInput;
