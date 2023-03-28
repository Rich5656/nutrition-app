import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Creating inital nutrition state
// all other information can be calculated based off of these three pieces of information
const initialNutrition = {
    dailyLimit: 0,
    exercise: 0,
    foodsList: []
};

export const GlobalContext = createContext(initialNutrition);

// Global provider to wrap other components in so the state information can be provided to the children
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialNutrition);

    // Actions
    function deleteFood(id) {
        dispatch({
            type: 'DELETE_FOOD',
            payload: id
        })
    };

    function addNewFood(food) {
        dispatch({
            type: 'ADD_NEW_FOOD',
            payload: food
        })
    }

    function addCalorieLimit(limit) {
        dispatch({
            type: 'ADD_CALORIES_LIMIT',
            payload: limit
        })
    }

    function addExercise(caloriesBurnt) {
        dispatch({
            type: 'ADD_EXERCISE',
            payload: caloriesBurnt
        })
    }


    return (<GlobalContext.Provider value={{
        foodsList: state.foodsList,
        dailyLimit: state.dailyLimit,
        exercise: state.exercise,
        deleteFood,
        addNewFood,
        addCalorieLimit,
        addExercise,
        }}>
        {children}
        </GlobalContext.Provider>); 
}