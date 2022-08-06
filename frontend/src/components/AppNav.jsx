import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppNav() {
    

    return (
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#/Home"> <h1>Welcome to Whip Up!</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/Meals">Meals</Nav.Link>
                <Nav.Link href="#/Drinks">Drinks</Nav.Link>
                <Nav.Link href="#/Desserts">Desserts</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default AppNav