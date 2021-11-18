import {useState} from 'react';
import {Button, Container, Image} from 'react-bootstrap';
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
        <span>Sneaker Company</span>
        <h1 className="bold">Fall Limited Edition Sneakers</h1>
        <p>
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <span className="bold price">${price}</span>
        <span className="bold px-4">50%</span><br></br>
        <span><s>$250.00</s></span><br></br>
        <Container fluid>
            <Button onClick={sub}><Image src="/images/icon-minus.svg"></Image></Button>
            <span className="bold">{counter}</span>
            <Button onClick={add}><Image src="/images/icon-plus.svg"></Image></Button>
            <Button className="btn-cart"><Image className="px-1 cart" src="/images/icon-cart.svg"></Image> Add to cart</Button>
        </Container>
        </>
     );
};
 
export default ProductInfo;