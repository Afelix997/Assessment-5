import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DishDetail from '../components/DishDetail'
import AppNav from '../components/AppNav'



function DessertDetailPage() {
    
    let { dessertID } = useParams()
    const [dessert, setDessert] = useState(null)
    
    async function fetchDessertById() {
        try{
            const jsonResponse = await axios.get(`https://api.edamam.com/api/recipes/v2/${dessertID}?type=public&app_id=a0645b34&app_key=8176b7b0ab7f60dc31946000a6bc6a98`
            )
            console.log(jsonResponse.data.recipe)
            setDessert(jsonResponse.data.recipe)
            
          }
          catch(error){
            console.error('Error occurred fetching data: ', error)
        }
    }
    
    console.log('dessert:',dessert)
    
    useEffect(() => {
        fetchDessertById()
      } , [])
    
    return (
        <div>
            <AppNav/>
            {dessert && < DishDetail meal={dessert} />} 
        </div>    
        
    )
}

export default DessertDetailPage