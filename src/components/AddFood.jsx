import React, { useState } from 'react';
import { ResultsDisplay } from './ResultsDisplay';

export const AddFood = () => {
    // hook to capture state changes to the text input
    const [text, setText] = useState(''); 
    const [foodsAPI, setFoodsAPI] = useState(null);

    // query the USDA API only on click of the search button to reduce unecessary API requests
    // this is a read only api key
    const searchFood = event => {
        event.preventDefault();

        const params = {
            apiKey: process.env.REACT_APP_API_KEY,
            query: text, 
            pageSize: '10'
        };

        const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.apiKey)}&query=${encodeURIComponent(params.query)}&pageSize=${encodeURIComponent(params.pageSize)}`;
    
        fetch(url)
        .then(res => res.json())
        .then(res => res.foods)
        .then(foodsArray => {
            // check that there is an actual array to deal with
            if (foodsArray.length > 0) {
                setFoodsAPI(foodsArray.map(food => {
                    // looping through each of the ten results to create a list to display
                    return (<ResultsDisplay key={food.fdcId} foodName={food.description} nutritionList={food.foodNutrients} />);
            }))
            // render text expaining there is no response
            } else {
                setFoodsAPI('Sorry, it appears there is no data for that request.');
            }
        })
        .catch(err => console.log(err));
    }
    
    return (
        <div>
            <h2>Add Food</h2>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder='Look up a food (ex. cookies)' />
            <button className='square-btn' onClick={event => searchFood(event)}>Search</button>
            <div className='grid-container'>
                {foodsAPI}
            </div>
        </div>
    );
};
