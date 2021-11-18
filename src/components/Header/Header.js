import { Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "./../NavBar";

const Header = () => {
    return (
        <Container fluid className="pt-3">
          <Row className="border-bottom pb-3">
            <Col className="order-2 order-lg-1 order-md-2 pt-lg-3 pt-sm-2 px-3" lg={2} md={5} sm={7} xs={6}>
            <Image src="/images/logo.svg" alt="logo"></Image>
            </Col>
            <Col className="order-1 order-lg-2 order-md-1 px-1" lg={7} md={3} sm={2} xs={2}>
              <NavBar></NavBar>
            </Col>
            <Col className="order-3 order-lg-3 order-md-3 px-2 w-25" lg={3} md={4} sm={3} xs={4}>
              <Image className="px-3" alt="shop" src="/images/icon-cart.svg"></Image>
              <Image className="w-25" alt="avatar" src="/images/image-avatar.png"></Image>
            </Col>
          </Row>
        </Container>
      );
}
export default Header;