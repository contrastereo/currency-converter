import React, {useContext} from "react";
import { currencyContext} from "../context/appContext";
import axios from 'axios'

async function SubmitHandler(props){
  const event = props.event
   event.preventDefault();
   const {fieldData, setFieldData} = useContext(currencyContext)
 
  const requestURL=(local, foreing)=>{
    return  (`https://free.currconv.com/api/v7/convert?q=${local}_${foreing},${foreing}_${local}&compact=ultra&apiKey=f721d2ff6d2f791cb2d2`)
  }
  const currentRequest =(local, foreing)=>{
    return `${local}_${foreing}`
  }

  const handleResults =(res)=>{
    setFieldData((prevValues) => ({
      ...prevValues,
      "foreingCoin": (parseInt(fieldData.localCoin) * res),
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



export default SubmitHandler