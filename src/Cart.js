import React from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]

const Cart = (props) => {
  return (
    <Modal
    show={props.show}
    onHide={props.hide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
         CART
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Container>
        <Row>
           <Col>
           </Col>
           <Col>
           </Col>
           <Col>
           </Col>
        </Row>
        { cartElements.map((item)=>(
            <Row>            
            <Col>
            <img src={item.imageUrl} alt="" />
            {item.name}
            </Col>
            <Col>
            {item.price}
            </Col>
            <Col>
            {
                item.quantity
            }
            <Button variant='danger'>Remove</Button>
            </Col>
         </Row>
        )) }
     </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.hide}>Purchase</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Cart
