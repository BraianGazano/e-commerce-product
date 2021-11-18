import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from "./components/Header";
import ProductInfo from './components/ProductInfo/ProductInfo';

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <Header></Header>
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row>
      <Col lg={1}></Col>
      <Col lg={6}></Col>
      <Col lg={4}>
        <ProductInfo></ProductInfo>
      </Col>
      <Col lg={1}></Col>
      </Row>
    </Container>
  );
}
export default App;
