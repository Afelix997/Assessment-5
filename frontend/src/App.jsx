import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import MealHomePage from './pages/MealHomePage'
import MealDetailPage from './pages/MealDetailPage';
import DrinkHomePage from './pages/DrinkHomePage'
import DrinkDetailPage from './pages/DrinkDetailPage';
import DessertHomePage from './pages/DessertHomePage'
import DessertDetailPage from './pages/DessertDetailPage';

import AppNav from "./components/AppNav"

import './App.css'



function App() {
 
  
  
  return (
    <div className="App">
    <AppNav />

    <Router> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Meals' element={<MealHomePage />} />
          <Route path='/Meals/:mealID' element={<MealDetailPage />} />
          <Route path='/Drinks' element={<DrinkHomePage />} />
          <Route path='/Drinks/:drinkID' element={<DrinkDetailPage />} />
          <Route path='/Desserts' element={<DessertHomePage />} />
          <Route path='/Desserts/:dessertID' element={<DessertDetailPage />} />
          
        </Routes>    
    </Router>
    
    
    </div>
    
  )
}

export default App
