import DessertTeaser from "./DessertTeaser"
import Row from 'react-bootstrap/Row';
function DessertList ({desserts}) {
    

    return(
            <Row className="justify-content-md-center">
            {desserts.map((dessert) => (
                <DessertTeaser {...dessert}/>
                ))
            }
            </Row>
    )
}

export default DessertList