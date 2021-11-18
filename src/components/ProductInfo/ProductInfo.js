import {useState} from 'react';
import {Button, Image} from 'react-bootstrap';

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
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <span>${price}</span>
        <span>$250.00</span>
        <span>50%</span>
        <Button onClick={sub}><Image src="/images/icon-minus.svg"></Image></Button>
        {counter}
        <Button onClick={add}><Image src="/images/icon-plus.svg"></Image></Button>
        </>
     );
};
 
export default ProductInfo;