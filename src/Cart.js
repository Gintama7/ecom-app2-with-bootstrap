import React, { useContext, useEffect } from 'react'
import { Badge, Button, Col, Container,  Modal, Row } from 'react-bootstrap';
import CartContext from './store/cart-context';
import axios from 'axios';



const Cart = (props) => {
  const crtCtx = useContext(CartContext);
  let amount =0;
  crtCtx.items.forEach((item)=>{
      
     amount += Number(item.price);

  })
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
        { crtCtx.items.map((product)=>(
            <Row className='mb-2' style={{borderBottom:'1px solid gray',alignItems:'center'}}>            
            <Col lg={4}  sm={4} className='d-flex align-items-center' >
            <img src={product.imgUrl} alt="" style={{width:'100px'}}/>
            <p style={{marginLeft:'5px'}}> {product.name}</p> 
            </Col>
            <Col lg={4}  sm={4} style={{textAlign:'center'}}>
            <h3>  {product.price}</h3>     
            </Col>
            <Col lg={4}  sm={4} style={{textAlign:'center'}}>
            <Badge bg='secondary' style={{height:'25px',width:'30px',marginRight:'5px'}}>{
                product.quantity
            }</Badge>
            <Button variant='danger' onClick={()=>crtCtx.removeItem(product.id)}>Remove</Button>
            </Col>
         </Row>
        )) }
     </Container>
    </Modal.Body>
    <Modal.Footer>
      <Container>      
        <h2>Total Amount: ${amount}</h2> 
      </Container>
      
      <Button onClick={props.hide}>Purchase</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Cart
