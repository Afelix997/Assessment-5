import axios from 'axios'

function DishDetail({ meal }) {

    

    const detail = meal.uri.split('#')
    let mealID = detail[1]

    const removeLikedItem = (event) => {
        event.preventDefault();
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
            <button onClick={submitLikedItem}>Add to Likes</button><br/><br/>
            <button onClick={removeLikedItem}>Remove from Likes</button>
            <h2>{meal.label}</h2>
            <img src={meal.image}  width= '200' height= '200' ></img>
            <p>{meal.ingredientLines && meal.ingredientLines.map((item) => (<p>{item}</p>))}</p>
            <a href={meal.url}>Instruction</a>
            
        </div>
        )
}
export default DishDetail