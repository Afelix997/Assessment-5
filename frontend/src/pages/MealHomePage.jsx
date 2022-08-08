import MealList from "../components/MealList"
import { useEffect, useState } from 'react'
import axios from 'axios'
import MealSearch from "../components/MealSearch"
import AppNav from "../components/AppNav"



function MealHomePage() {
    const [meals, setMeals] = useState([])

  async function getData() {
    try{
      const jsonResponse = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=main%20dish&app_id=a0645b34&app_key=8176b7b0ab7f60dc31946000a6bc6a98&mealType=Dinner&dishType=Main%20course&imageSize=SMALL&random=true'
      )
      console.log(jsonResponse.data.hits)
      setMeals(jsonResponse.data.hits)
    }
    catch(error){
      console.error('Error occurred fetching data: ', error)
    }

  }
  
  useEffect( ()=> {
    getData()
  } , [])
  
    return (
        <div>
        <AppNav/>
            
        <MealSearch /> 
        <br></br>
        
        <h2>Popular Dishes</h2>
        <hr />
        <MealList meals={meals} />
        
        </div>    
        
    )
}

export default MealHomePage