import DrinkTeaser from './DrinkTeaser';
import Row from 'react-bootstrap/Row';

function DrinkList({ drinks }) {
   
    return(
        <Row className="justify-content-md-center">
        {drinks.map((drink) => (
            <DrinkTeaser {...drink}/>
            ))
        }
        </Row>
)
}

export default DrinkList