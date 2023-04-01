import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

// this component is used to display each of the li elements that are needed in the foodslist componenet 
export const Foods = ({ entry }) => {
  // needed function from the global context
  const { deleteFood } = useContext(GlobalContext)

  return (
    <li className='food-list'>
      <div className='flex-container'>
        <div className='food-name'>{entry.food}</div>
        <div className='food-cals'>{entry.calories} Cal </div>
        <button className='delete-btn' onClick={() => deleteFood(entry.id)}>Delete</button>
      </div>
    </li>
  )
}
