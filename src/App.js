import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { CalcDisplay } from './components/CalcDisplay';
import { FoodsList } from './components/FoodsList';
import { AddFood } from './components/AddFood';
import { GlobalProvider } from './context/GlobalContext';
import { DailyCaloriesCalculation } from './components/DailyCaloriesCalculation';
import { Exercise } from './components/Exercise';

// object containing all nutrition information to be displayed
// const initialNutrition = {
//   dailyLimit: 0,
//   exercise: 0,
//   calsConsumed: 0,
//   remaining: 0,
//   foodsConsumed: [],
// }


 function App() {

  return(
  <GlobalProvider>
    <Header />
    <DailyCaloriesCalculation/>
    <CalcDisplay />
    <FoodsList />
    <AddFood />
    <Exercise />
  </GlobalProvider>
  )
}

export default App;
