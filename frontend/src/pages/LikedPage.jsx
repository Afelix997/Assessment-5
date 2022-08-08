
import { useEffect, useState } from 'react'
import axios from 'axios'
import AppNav from "../components/AppNav"
import LikedList from '../components/LikedList'



function LikedPage() {
    
    const [likedMeals, setLikedMeals] = useState(null)
    const [likedDesserts, setLikedDesserts] = useState(null)
    const [likedDrinks, setLikedDrinks] = useState(null)

    async function getData() {
    try{
    const jsonResponse = await axios.get('getLiked')
        console.log(jsonResponse.data.meals)
        setLikedMeals(jsonResponse.data.meals)
        setLikedDesserts(jsonResponse.data.desserts)
        setLikedDrinks(jsonResponse.data.drinks)
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
            <AppNav />
            <br/>
            <h2>Liked List</h2>
            <hr />
            
            {likedMeals && likedDesserts && likedDrinks &&<LikedList meals={likedMeals} desserts={likedDesserts} drinks={likedDrinks} />}
            <br></br>
            
        </div>    
        
    )
}

export default LikedPage