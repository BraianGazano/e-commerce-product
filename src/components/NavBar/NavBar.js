
import {Navbar, Container, Nav} from 'react-bootstrap';

const HamburgerIcon = () =>{
    return(
        <img alt="" src="./images/icon-menu.svg"></img>
    );
};


const NavBar = () => {
    return (
        <Navbar expand="lg">
        <Container fixed="top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <HamburgerIcon/>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#collections">Collections</Nav.Link>
              <Nav.Link href="#men">Men</Nav.Link>
              <Nav.Link href="#women">Women</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      );
}
export default NavBar;


