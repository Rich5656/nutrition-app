import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Foods } from './Foods';

export const FoodsList = () => {
  // bringing the foodsList in from global context 
  const { foodsList } = useContext(GlobalContext);

  // looping through each item in th foodsList to render the display each food
  const listedFoods = foodsList.map(entry => (<Foods key={entry.id} entry={entry}/>));
  
  return (
    <>
        <h2>Foods Consumed Today</h2>
        
          <div className='grid-container'>
            {foodsList.length > 0 ? listedFoods : 'Search a food and add it below.'}
          </div>
        
    </>
  );
};

