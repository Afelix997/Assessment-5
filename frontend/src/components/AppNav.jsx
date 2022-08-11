import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppNav() {
    

    return (
        
      <Container fluid class='justify-content-center'>
        <Navbar expand="lg" class='justify-content-center'>
        <Navbar.Brand href="#/Home"> <h1 className='NavMain'>Whip Up</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto NavEle" >
            <Nav.Link href="#/Meals">Meals</Nav.Link>
              <Nav.Link href="#/Drinks">Drinks</Nav.Link>
              <Nav.Link href="#/Desserts">Desserts</Nav.Link>
              <Nav.Link href="#/Liked">Saved Dishes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    
    )
}

export default AppNav