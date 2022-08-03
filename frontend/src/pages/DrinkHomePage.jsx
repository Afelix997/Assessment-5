import { useEffect, useState } from 'react'
import axios from 'axios'
import DrinkList from '../components/DrinkList'

function DrinkHomePage() {
    const [drinks,setDrinks] = useState([])
    let allDrinks=[]
    async function getData() {
        try {
            const jsonResponse = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'
            )
            
            setDrinks([...drinks, jsonResponse.data.drinks[0]])
            
            
        
        }
        catch(error){
            console.error('Error occurred fetching data: ', error)
        }
    }
  
    function repeatFun(){
        if(drinks.length<12) getData();
        return 
    }
    useEffect( ()=> {
        repeatFun()
        
    } , [drinks])

    return (
        <div>
            <h2>Popular Drinks</h2>
            <hr />
            <DrinkList drinks={drinks} />
            <br></br>
            
            
        </div>    
        
    )
}

export default DrinkHomePage