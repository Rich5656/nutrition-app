import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const CalcDisplay = () => {
    // needed functions from the global conext
    const { dailyLimit, foodsList, exercise } = useContext(GlobalContext);
    
    // calculating total calories consumed based on the foodsList
    const calsConsumed = foodsList.reduce((acc, item) => (acc += item.calories), 0);
    
    // calculating reamining calories via other display elements
    const remaining = dailyLimit + exercise - calsConsumed;
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Daily Limit</th>
                    <th></th>
                    <th>Exercise</th>
                    <th></th>
                    <th>Consumed</th>
                    <th></th>
                    <th>Remaining Calories</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{dailyLimit}</td>
                    <td>+</td>
                    <td  className='exercise'>{exercise}</td>
                    <td>-</td>
                    <td>{calsConsumed}</td>
                    <td>=</td>
                    <td style={{color: remaining < 0 ? 'red' : '#1f9751'}}>{remaining}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
