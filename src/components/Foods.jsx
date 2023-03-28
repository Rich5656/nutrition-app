import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const Foods = ({ entry }) => {
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
