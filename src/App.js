import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalContext';
import { Header } from './components/Header';
import { DailyCaloriesCalculation } from './components/DailyCaloriesCalculation';
import { CalcDisplay } from './components/CalcDisplay';
import { FoodsList } from './components/FoodsList';
import { AddFood } from './components/AddFood';
import { Exercise } from './components/Exercise';

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
