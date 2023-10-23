import React, { useContext } from 'react'
import { Badge, Button, Col, Container, Figure, Modal, Row } from 'react-bootstrap';
import CartContext from './store/cart-context';

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
  const crtCtx = useContext(CartContext);

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
        <Row className='mb-2'>
           <Col lg={4} sm={4} style={{textAlign:'center'}}>ITEM
           </Col>
           <Col lg={4}  sm={4} style={{textAlign:'center'}}>PRICE
           </Col>
           <Col lg={4}  sm={4} style={{textAlign:'center'}}>QUANTITY
           </Col>
        </Row>
        { crtCtx.items.map((item)=>(
            <Row className='mb-2' style={{borderBottom:'1px solid gray'}}>            
            <Col lg={4}  sm={4} >
            <img src={item.imgUrl} alt="" style={{width:'100px'}}/>
            <h3>  {item.name}</h3> 
            </Col>
            <Col lg={4}  sm={4} style={{textAlign:'center'}}>
      <h3>  {item.price}</h3>     
            </Col>
            <Col lg={4}  sm={4} style={{textAlign:'center'}}>
            <Badge bg='secondary' style={{height:'25px',width:'30px',marginRight:'5px'}}>{
                item.quantity
            }</Badge>
            <Button variant='danger' onClick={()=>crtCtx.removeItem(item.id)}>Remove</Button>
            </Col>
         </Row>
        )) }
     </Container>
    </Modal.Body>
    <Modal.Footer>
      <Container>      
        <h2>Total Amount: ${crtCtx.totalAmount}</h2> 
      </Container>
      
      <Button onClick={props.hide}>Purchase</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Cart
