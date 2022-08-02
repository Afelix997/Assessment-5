import MealTeaser from "./MealTeaser"
import Row from 'react-bootstrap/Row';
function MealList ({meals}) {
    

    return(
            <Row className="justify-content-md-center">
            {meals.map((meal) => (
                <MealTeaser {...meal}/>
                ))
            }
            </Row>
    )
}

export default MealList