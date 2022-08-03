import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

function DrinkTeaser(props) {
    const drinkID= props.idDrink
   
    return(
        <Col xs lg="3">
            <Link to={`/Drinks/${drinkID}`} > <img src={props.strDrinkThumb} width='200' height='200'></img> <p>{props.strDrink}</p>
            </Link>
        </Col>
    )
}
export default DrinkTeaser;