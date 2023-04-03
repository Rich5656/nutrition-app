import React, { useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';


export const DailyCaloriesCalculation = () => {
    // managing state with hooks for input fields
    const [ age, setAge ] = useState('');
    const [ feet, setFeet ] = useState('');
    const [ inches, setInches ] = useState('');
    const [ weight, setWeight ] = useState('');

    // defining the needed function form the global context
    const { addCalorieLimit } = useContext(GlobalContext);

    // defining a function to set the daily calories limit
    const submitDailyCalories = event => {
        event.preventDefault();

        const limit = Math.round(1.375 * ( 13.397*(parseFloat(weight)/2.205) ) + ( 4.799 * (parseFloat(feet) + (parseFloat(inches)/12)) * 2.54 ) - ( 5.677 * parseFloat(age) ) + 88.362) + 1000
        
        // function call to update the calorie limit in global context
        addCalorieLimit(limit);
    }

  return (
    <>
        <h3>Calculate Daily Calorie Limit</h3>
        <div className='flex-container'>
          <input className='cal-limit-disp-left' type="number" max='150' min='0' value={age} onChange={(event) => setAge(event.target.value)} placeholder='Age in years' />
          <input className='cal-limit-disp-right' type="number" max='500' min='0' value={weight} onChange={(event) => setWeight(event.target.value)} placeholder='Weight in lbs' />
        </div>
        <div className='flex-container'>
          <input className='cal-limit-disp-left' type="number" max='10' min='0' value={feet} onChange={(event) => setFeet(event.target.value)} placeholder='Height ft' />
          <input className='cal-limit-disp-right' type="number" max='11' min='0' value={inches} onChange={(event) => setInches(event.target.value)} placeholder='Height inches' />   
        </div>
        <button className='square-btn' onClick={event => submitDailyCalories(event)}>Calculate</button> 
    </>
  )
}
