import React, { createContext, useState } from "react";

export const currencyContext = createContext();

export function CurrencyProvider(props) {
  const [fieldData, setFieldData] = useState({});
  return (
    <currencyContext.Provider value={{ fieldData, setFieldData }}>
      {props.children}
    </currencyContext.Provider>
  );
}
