import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DishDetail from '../components/DishDetail'


function MealDetailPage() {
    
    let { mealID } = useParams()
    const [meal, setMeal] = useState(null)
    
    async function fetchMealById() {
        try{
            const jsonResponse = await axios.get(`https://api.edamam.com/api/recipes/v2/${mealID}?type=public&app_id=a0645b34&app_key=8176b7b0ab7f60dc31946000a6bc6a98`
            )
            console.log(jsonResponse.data.recipe)
            setMeal(jsonResponse.data.recipe)
            
          }
          catch(error){
            console.error('Error occurred fetching data: ', error)
        }
    }
    
    console.log('meal:',meal)
    
    useEffect(() => {
        fetchMealById()
      } , [])
    
    return (
        <div>
            {meal && < DishDetail meal={meal} />} 
        </div>    
        
    )
}

export default MealDetailPage