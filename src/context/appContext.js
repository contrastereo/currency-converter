import React, { createContext, useState } from "react";

export const currencyContext = createContext();

export function CurrencyProvider(props) {
  const [fieldData, setFieldData] = useState({});
  const [history, setHistory] = useState([])
  return (
    <currencyContext.Provider value={{ fieldData, setFieldData , history, setHistory }}>
      {props.children}
    </currencyContext.Provider>
  );
}
