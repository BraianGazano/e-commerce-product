import {useState} from 'react';
import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import "./ProductInfo.css"
const ProductInfo = () => {
    const [counter, setCounter] = useState(1);
    const add = ()=>{
        setCounter(counter+1);
    }
    const sub = () => {
        if(counter > 1){
            setCounter(counter-1);
        }
    }
    const price = (125*counter).toFixed(2);
    return ( 
        <>
        <Container fluid className="pt-5">
            <Row className="pt-5">
                <span className="bold company">Sneaker Company</span>
                <h1 className="bold">Fall Limited Edition Sneakers</h1>
                <p className="pt-4">
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
            </Row>
            <Row>
                <Col lg={3} className="align-self-center">
                    <span className="bold price">${price}</span>   
                </Col>
                <Col lg={7} className="align-self-center">
                    <span className="bold discount">50%</span><br></br>       
                </Col>
            </Row>
            <Row>
                <span className="bold previous-price">$250.00</span><br></br>
            </Row>
            <Row className="pt-5">
                <Col md={4} className="buttons-counter rounded">
                    <Button variant="bg-white" onClick={sub}><Image src="/images/icon-minus.svg"></Image></Button>
                    <span className="bold px-3">{counter}</span>
                    <Button variant="bg-white" onClick={add}><Image src="/images/icon-plus.svg"></Image></Button>
                </Col>
                <Col md={8}>
                    <Button className="btn-cart bold"><Image alt="cart" className="px-1 icon-cart" src="/images/icon-cart.svg"></Image> Add to cart</Button>
                </Col>
            </Row>
        </Container>
        </>
     );
};
 
export default ProductInfo;