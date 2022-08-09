import axios from 'axios'
import { useState, useEffect } from "react"
function DishDetail({ meal }) {

    const [buttonSwitch, SetButtonSwitch] = useState(false)

    const detail = meal.uri.split('#')
    let mealID = detail[1]

    const checkLikedItem = () => {
        axios.post('checkLiked', {
            'item': mealID
        })
            .then((response) => {
                console.log('response from server: ', response)
                response.data=='True'? SetButtonSwitch(true):SetButtonSwitch(false)
                
            })
    }

    useEffect(() => {
        checkLikedItem()
    }, [])

    const removeLikedItem = (event) => {
        event.preventDefault();
        SetButtonSwitch(false)
        axios.post('removeLiked', {
            'item': mealID
            
        })
            .then((response) => {
                console.log('removed Liked Item')
                console.log('response from server: ', response)
               
            })
    }

    

    const submitLikedItem = (event) => {
        event.preventDefault();
        SetButtonSwitch(true)
        axios.post('createLiked', {
            'type': meal.dishType[0],
            'item': mealID
            
        })
            .then((response) => {
                console.log('Added Liked Item')
                console.log('response from server: ', response)
               
            })
    }

    return (
        <div>
        
            <div> {buttonSwitch==false?<button onClick={submitLikedItem}>Add to Likes</button>:
                <button onClick={removeLikedItem}>Remove from Likes</button>}</div>
            <h2>{meal.label}</h2>
            <img src={meal.image}  width= '200' height= '200' ></img>
            <p>{meal.ingredientLines && meal.ingredientLines.map((item) => (<p>{item}</p>))}</p>
            <a href={meal.url}>Instruction</a>
            
        </div>
        )
}
export default DishDetail