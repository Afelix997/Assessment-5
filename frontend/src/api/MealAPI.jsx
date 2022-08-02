import axios from 'axios'

async function fetchMealById(MealID) {

    let response = await axios.get(`https://api.edamam.com/api/recipes/v2/${MealID}?type=public&app_id=a0645b34&app_key=8176b7b0ab7f60dc31946000a6bc6a98`)
    
    return response

}

export default fetchMealById
