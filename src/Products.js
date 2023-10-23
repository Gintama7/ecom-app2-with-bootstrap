import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    

const Products = () => {
    const [products,setProducts] = useState(productsArr);
  return (
    <Container className='mt-3'>
    <Row>
      {products.map((prod)=>(
        <Col lg={4} className='mb-3'>
        <Card style={{width:'18rem'}}>
        <Card.Img src={prod.imageUrl}/>
        <Card.Body>
            <Card.Title>{prod.title}</Card.Title>           
            <Card.Text>$ {prod.price}</Card.Text>
            <Button>Add to Cart</Button>
        </Card.Body>
         </Card>  
         </Col>
      ))}
      
      </Row>
    </Container>
  )
}

export default Products
