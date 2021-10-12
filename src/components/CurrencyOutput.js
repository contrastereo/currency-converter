import React, { useContext } from 'react';
import { currencyContext } from '../context/appContext';

const CurrencyOutput =()=>{
  const { fieldData} = useContext(currencyContext)
  return(
    <div className="display">{fieldData.foreingCoin} </div>
  )
}
export default CurrencyOutput