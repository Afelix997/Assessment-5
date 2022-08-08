import DessertTeaser from './DessertTeaser';
import MealTeaser from './MealTeaser';
import DrinkTeaser from './DrinkTeaser';
import Row from 'react-bootstrap/Row';

function LikedList({ meals,drinks,desserts }) {
   
    return(
        <Row className="justify-content-md-center">
            
            {meals.map((meal) => (
                <MealTeaser {...meal}/>
                ))
            }
            {drinks.map((drink) => (
                <DrinkTeaser {...drink}/>
                ))
            }
            {desserts.map((dessert) => (
                <DessertTeaser {...dessert}/>
                ))
            }    
        
        
        </Row>
)
}

export default LikedList