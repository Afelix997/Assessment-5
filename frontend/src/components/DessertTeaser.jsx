import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

function DessertTeaser(props) {
    const dish = props.recipe
    const detail = dish.uri.split('#')
    let dessertID = detail[1]
    return(
        <Col xs lg="3">
            
            <Link to={`/Desserts/${dessertID}`} ><img src={dish.image}  width= '200' height= '200' ></img><p>{dish.label}</p> </Link>
        </Col>
    )
}
export default DessertTeaser;