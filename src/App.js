import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <Header className="container-header"></Header>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
}
export default App;
