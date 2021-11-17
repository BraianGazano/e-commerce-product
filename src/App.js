import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Header></Header>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}
export default App;
