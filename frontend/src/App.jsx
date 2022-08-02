import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage'
import MealHomePage from './pages/MealHomePage'
import DrinkHomePage from './pages/DrinkHomePage'
import DessertHomePage from './pages/DessertHomePage'

import AppNav from "./components/AppNav"

import './App.css'
import axios from 'axios'

function App() {
 
  
  
  return (
    <div className="App">
    <AppNav />

    <Router> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Meals' element={<MealHomePage />} />
          <Route path='/Drinks' element={<DrinkHomePage  />} />
          <Route path='/Desserts' element={<DessertHomePage  />} />
        </Routes>    
    </Router>
    
    
    </div>
    
  )
}

export default App
