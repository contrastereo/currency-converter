import React, { createContext, useState } from "react";

export const currencyContext = createContext();

export function CurrencyProvider(props) {
  const [localCoin, setLocalCoin] = useState("");
  const [foreingCoin, setForeingCoin] = useState("");
  return (
    <currencyContext.Provider
      value={{ localCoin, setLocalCoin, foreingCoin, setForeingCoin }}
    >
      {props.children}
    </currencyContext.Provider>
  );
}
