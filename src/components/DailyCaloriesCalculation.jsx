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
        <h2>Calculate Daily Calorie Limit</h2>
        <div className='calories-calculation-container'>
          <div className='calculation-column-left'>
            <input type="number" max='150' min='0' value={age} onChange={(event) => setAge(event.target.value)} placeholder='Age (yrs.)' />
            <input type="number" max='500' min='0' value={weight} onChange={(event) => setWeight(event.target.value)} placeholder='Weight (lbs.)' />
          </div>
          <div className='calculation-column-right'>
            <input type="number" max='10' min='0' value={feet} onChange={(event) => setFeet(event.target.value)} placeholder='Height (ft.)' />
            <input type="number" max='11' min='0' value={inches} onChange={(event) => setInches(event.target.value)} placeholder='Height (in.)' />   
          </div>
        </div>
        <button className='square-btn' onClick={event => submitDailyCalories(event)}>Calculate</button> 
    </>
  )
}
