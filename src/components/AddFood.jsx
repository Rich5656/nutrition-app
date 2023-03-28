import React, { useState } from 'react';
import { ResultsDisplay } from './ResultsDisplay';

export const AddFood = () => {
    // hook for to capture state changes to the text input
    const [text, setText] = useState(''); 
    const [foodsAPI, setFoodsAPI] = useState(null);

    // function to fetch api data on submission
    // mxN2XdffgVKgdQGEiuERj5otztH0jbRGz1Nfaq0T key
    
    // console.log(res)
    
    // bringing in the add food function from global context



    // query the USDA API only on click of the search button to reduce unecessary API requests
    const searchFood = event => {
        event.preventDefault();

        const params = {
            apiKey: 'mxN2XdffgVKgdQGEiuERj5otztH0jbRGz1Nfaq0T',
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
            // render text expaining why there is no response
            } else {
                setFoodsAPI('Sorry, it appears there is no data for that request.');
            }
            console.log(foodsArray)
        })
        .catch(err => console.log(err));
    }
    
    return (
        <div>
            <h3>Add Food</h3>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder='Look up a food (ex. cookies)' />
                <button className='square-btn' onClick={event => searchFood(event)}>Search</button>
                <div>{foodsAPI}</div>
        </div>
    );
};
