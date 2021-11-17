import {Nav} from 'react-bootstrap';
const NavBar = () => {
    return (
        <>
        <Nav>
            <Nav.Item as="li">
             <Nav.Link>Collections</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
             <Nav.Link>Men</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
             <Nav.Link>Women</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
             <Nav.Link>About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
             <Nav.Link>Contact</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
      );
}
export default NavBar;