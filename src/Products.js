import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CartContext from './store/cart-context';

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
       

const Products = (props) => {
    const products =productsArr;

    const crtCtx = useContext(CartContext);

  const addItemHandler =(prod)=>{
      const obj= {id:prod.title,name:prod.title,price:Number(prod.price),imgUrl:prod.imageUrl};
      crtCtx.addItem({...obj,quantity:1});
  }
  return (
    <Container className='d-flex justify-content-center align-items-center mt-3'>
    <Row >
      {products.map((prod)=>(
        <Col md={6} lg={3} className='mb-3'>
        <Card style={{width:'18rem'}}>
        <Card.Img src={prod.imageUrl}/>
        <Card.Body>
            <Card.Title>{prod.title}</Card.Title>           
            <Card.Text>$ {prod.price}</Card.Text>
            <Button onClick={()=>addItemHandler(prod)}>Add to Cart</Button>
        </Card.Body>
         </Card>  
         </Col>
      ))}
      
      </Row>
    </Container>
  )
}

export default Products
