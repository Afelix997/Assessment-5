import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import MealDetail from '../components/MealDetail'
import fetchMealById from '../api/MealAPI'


function MealDetailPage() {
    
    let { mealID } = useParams()
    const [meal, setMeal] = useState(null)
    

    useEffect(() => {
        fetchMealById(mealID)
            .then((response) => {
                console.log(response)
                setMeal(response.data.recipe)
            })
    }, [])
    console.log(meal)
    
    return (
        <div>
            <MealDetail {...meal} /> 
        </div>    
        
    )
}

export default MealDetailPage