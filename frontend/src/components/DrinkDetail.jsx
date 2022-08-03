
function DrinkDetail({drink}) {
    
    
    
    return (
        <div>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} width='200' height='200'></img> 
            <div>
                {drink.strIngredient1 != null ? <p>{drink.strMeasure1} {drink.strIngredient1} </p> : ''}
                {drink.strIngredient2 != null ? <p>{drink.strMeasure2} {drink.strIngredient2} </p> : ''}
                {drink.strIngredient3 != null ? <p>{drink.strMeasure3} {drink.strIngredient3} </p> : ''}
                {drink.strIngredient4 != null ? <p>{drink.strMeasure4} {drink.strIngredient4} </p> : ''}
                {drink.strIngredient5 != null ? <p>{drink.strMeasure5} {drink.strIngredient5} </p> : ''}
                {drink.strIngredient6 != null ? <p>{drink.strMeasure6} {drink.strIngredient6} </p> : ''}
                {drink.strIngredient7 != null ? <p>{drink.strMeasure7} {drink.strIngredient7} </p> : ''}
                {drink.strIngredient8 != null ? <p>{drink.strMeasure8} {drink.strIngredient8} </p> : ''}
                {drink.strIngredient9 != null ? <p>{drink.strMeasure9} {drink.strIngredient9} </p> : ''}
                {drink.strIngredient10 != null ? <p>{drink.strMeasure10} {drink.strIngredient10} </p> : ''}
                {drink.strIngredient11 != null ? <p>{drink.strMeasure11} {drink.strIngredient11} </p>:''}
            </div>
            <h5>{drink.strInstructions}</h5>
        </div>
        )
}
export default DrinkDetail