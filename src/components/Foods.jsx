import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

// this component is used to display each of the li elements that are needed in the foodslist componenet 
export const Foods = ({ entry }) => {
  // needed function from the global context
  const { deleteFood } = useContext(GlobalContext)

  return (
    <>
      <div className='grid-item-food'>{entry.food}</div>
      <div className='grid-item-calories'>{entry.calories} Cal </div>
      <div className='btn-wrapper'>
        <button className='grid-item-btn' onClick={() => deleteFood(entry.id)}>Delete</button>
      </div>
    </>
  )
}
