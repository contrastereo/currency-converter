import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { currencyContext } from '../context/appContext'

const OperationHistory = () => {
    const {history} = useContext(currencyContext)
    return (<table>
        <thead>
            <tr>
            {!history[0] ? null : Object.keys(history[0]).map(key => (<th>{key}</th>))}
            </tr>
        </thead>
        <tbody>
            { !history[0] ? null: history.map(
                
                (obj)=>
                <tr>{Object.keys(obj).map(key => <td>{obj[key]}</td>)}</tr>
            )}
            <tr>
            
            </tr>
        </tbody>
    </table>)
}
export default OperationHistory