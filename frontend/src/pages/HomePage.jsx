import { Link } from 'react-router-dom'

function HomePage({ }) {


    return (
        <div>
            <Link to={`/Meals`} >Meals </Link>
            <Link to={`/Drinks`} >Drinks </Link>
            <Link to={`/Desserts`} >Dessert </Link>
        </div>    
        
    )
}

export default HomePage