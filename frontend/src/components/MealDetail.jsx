

function MealDetail(props) {
    return (
        <div>
        <img src={props.image}  width= '200' height= '200' ></img>
            <p>{props.label}</p>
        </div>
        )
}
export default MealDetail