import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./../NavBar";

const Header = () => {
    return (
        <Container fluid>
          <Row className="p-5 border-bottom">
            <Col md={2}>
            <img src="/images/logo.svg" alt="logo"></img>
            </Col>
            <Col md={8}>
              <NavBar></NavBar>
            </Col>
            <Col md={2}>
              <img className="px-5" alt="shop" src="/images/icon-cart.svg"></img>
              <img  width="50px" alt="avatar" src="/images/image-avatar.png"></img>
            </Col>
          </Row>
        </Container>
      );
}
 
export default Header;