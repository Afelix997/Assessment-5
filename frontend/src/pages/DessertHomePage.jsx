
import { useEffect, useState } from 'react'
import axios from 'axios'
import DessertList from '../components/DessertList'
import DessertSearch from '../components/DessertSearch'
import AppNav from '../components/AppNav'



function DessertHomePage() {
    const [desserts, setDesserts] = useState([])

    async function getData() {
      try{
        const jsonResponse = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=desserts&app_id=a0645b34&app_key=8176b7b0ab7f60dc31946000a6bc6a98&random=true'
        )
        setDesserts(jsonResponse.data.hits)
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
              
              
          <DessertSearch /> 
          <br/><br/>
          
          <h2>Popular Desserts</h2>
          <hr />
          <DessertList desserts={desserts} />
          
          </div>    
          
      )
  }

export default DessertHomePage