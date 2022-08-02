import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

function ArticleTeaser(props) {
    const dish = props.recipe
    const detail = dish.uri.split('#')
    let mealID = detail[1]
    return(
        <Col xs lg="3">
            <img src={dish.image}  width= '200' height= '200' ></img>
            <Link to={`/Meals/${mealID}`} >{dish.label} </Link>
        </Col>
    )
}
export default ArticleTeaser;