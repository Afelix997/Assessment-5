

function DishDetail({meal}) {
   
    return (
        <div>
            <h2>{meal.label}</h2>
            <img src={meal.image}  width= '200' height= '200' ></img>
            <p>{meal.ingredientLines && meal.ingredientLines.map((item) => (<p>{item}</p>))}</p>
            <a href={meal.url}>Instruction</a>
            
        </div>
        )
}
export default DishDetail