import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'

import HomePage from './pages/HomePage'
import MealHomePage from './pages/MealHomePage'
import MealDetailPage from './pages/MealDetailPage';
import DrinkHomePage from './pages/DrinkHomePage'
import DrinkDetailPage from './pages/DrinkDetailPage';
import DessertHomePage from './pages/DessertHomePage'
import DessertDetailPage from './pages/DessertDetailPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import LikedPage from './pages/LikedPage';

import AppNav from "./components/AppNav"

import './App.css'




const getCSRFToken = ()=>{
  let csrfToken

  // the browser's cookies for this page are all in one string, separated by semi-colons
  const cookies = document.cookie.split(';')
  for ( let cookie of cookies ) {
      // individual cookies have their key and value separated by an equal sign
      const crumbs = cookie.split('=')
      if ( crumbs[0].trim() === 'csrftoken') {
          csrfToken = crumbs[1]
      }
  }
  return csrfToken
}
console.log('token? ', getCSRFToken())
axios.defaults.headers.post['X-CSRFToken'] = getCSRFToken()



function App() {
  const [user, setUser] = useState(null)

  
  
  return (
    <div className="App">
      <div className='navTop'>
    {/* <AppNav /> */}
      </div>
    <Router> 
        <Routes>
          <Route path='/' element={< SignInPage user={user} setUser={setUser} />} />
          <Route path='/SignUp' element = {<SignUpPage />} />
          <Route path='/Home' element={<HomePage user={user} setUser={setUser}/>} />
          <Route path='/Meals' element={<MealHomePage />} />
          <Route path='/Meals/:mealID' element={<MealDetailPage />} />
          <Route path='/Drinks' element={<DrinkHomePage />} />
          <Route path='/Drinks/:drinkID' element={<DrinkDetailPage />} />
          <Route path='/Desserts' element={<DessertHomePage />} />
          <Route path='/Desserts/:dessertID' element={<DessertDetailPage />} />
          <Route path='/Liked' element = {<LikedPage />} />
          
        </Routes>    
    </Router>
    
    
    </div>
    
  )
}

export default App
