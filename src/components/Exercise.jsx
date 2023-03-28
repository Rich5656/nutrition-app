import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const Exercise = () => {
    // hook to track the state of the exercise input
    const [ exercise, setExercise ] = useState('');

    // bringing in the needed function from the global context
    const { addExercise } = useContext(GlobalContext);

    // updating the initial nutrition state to reflect exercise
    // addExercise(exercise)

    return (
        <>
            <h3>Add Exercise</h3>
            <div>
                <input type="number" max='100000' min='0' onChange={(event) => setExercise(event.target.value)} placeholder='Calories burned during exercise' />
                <button className='square-btn' onClick={() => addExercise(parseFloat(exercise))} >Add</button>    
            </div>
        </>
    )
}
