const reducer =  (state, action) => {
    switch(action.type) {
        case 'DELETE_FOOD':
            return {
                ...state,
                foodsList: state.foodsList.filter(food => food.id !== action.payload)
            }

        case  'ADD_NEW_FOOD':
            return {
                ...state,
                foodsList: [...state.foodsList, action.payload]
            }

        case 'ADD_CALORIES_LIMIT':
            return{
                ...state,
                dailyLimit: action.payload 
            }

        case 'ADD_EXERCISE':
            return{
                ...state,
                exercise: action.payload + state.exercise
            } 

        default: 
            return state;
    }
}

export default reducer;