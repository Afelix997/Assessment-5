import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function AppNav() {
    

    return (
        <Navbar className='navtop'>
            <Nav>
               <h1>Welcome to Whip Up!</h1>
               
              </Nav><br></br> <Nav.Link href='/'>
                    HOME
                </Nav.Link>
        </Navbar>
    )
}

export default AppNav