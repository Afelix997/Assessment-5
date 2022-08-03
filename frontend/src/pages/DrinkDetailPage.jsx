import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DrinkDetail from '../components/DrinkDetail'


function DrinkDetailPage() {
    
    let { drinkID } = useParams()
    const [drink, setDrink] = useState(null)
    
    async function fetchDrinkById() {
        try{
            const jsonResponse = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
            )
            console.log(jsonResponse.data.drinks[0])
            setDrink(jsonResponse.data.drinks[0])
            
          }
          catch(error){
            console.error('Error occurred fetching data: ', error)
        }
    }
    
    
    
    useEffect(() => {
        fetchDrinkById()
      } , [])
    console.log('drink:',drink)
    return (
        <div>
            {drink && < DrinkDetail drink={drink} />} 
        </div>    
        
    )

}

export default DrinkDetailPage