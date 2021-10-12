import React, { createContext, useState } from "react";

export const currencyContext = createContext();

export function CurrencyProvider(props) {
  const [fieldData, setFieldData] = useState({"foreingCoin":0.00});

  return (
    <currencyContext.Provider value={{ fieldData, setFieldData }}>
      {props.children}
    </currencyContext.Provider>
  );
}
