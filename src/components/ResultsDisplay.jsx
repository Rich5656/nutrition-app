import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';


export const ResultsDisplay = ({ foodName, nutritionList }) => {
    const { addNewFood, foodsList } = useContext(GlobalContext);

    //converting format of foodName
    foodName = foodName.charAt(0).toUpperCase() + foodName.slice(1).toLowerCase()
    
    // loop through nutrition list to get only the Energy value (which is calories)
    const foodCals = nutritionList.filter(nutrient => nutrient.nutrientName === 'Energy')
    
    // defining function for submitting new food to foodsList
    const submitNewFood = event => {
        event.preventDefault();

        let newFood = {
            id: 1,
            food: foodName,
            calories: +foodCals[0].value
        }
        if (foodsList.length > 0) {
            newFood['id'] = foodsList.at(-1).id + 1;
        }

        addNewFood(newFood);
    }
   
    return (
        <>
          <div className='grid-item-food'>{foodName}</div>
          <div className='grid-item-calories'>{foodCals.length > 0 ? `${foodCals[0].value} Cal`: 'Na'}</div>
          <button className='grid-item-btn' onClick={submitNewFood}>Add</button>
        </>
    )
}
