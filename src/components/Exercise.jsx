import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const Exercise = () => {
    // hook to track the state of the exercise input
    const [ exercise, setExercise ] = useState('');

    // bringing in the needed function from the global context
    // directly invoked in the onClick for the addExerciseButton
    const { addExercise } = useContext(GlobalContext);

    return (
        <>
            <h2>Add Exercise</h2>
            <div>
                <input type="number" max='100000' min='0' onChange={(event) => setExercise(event.target.value)} placeholder='Calories burned during exercise' />
                <button id='addExerciseButton' className='square-btn' onClick={exercise ? () => addExercise(parseFloat(exercise)): null}>
                    Add
                </button>
            </div>
        </>
    )
}
