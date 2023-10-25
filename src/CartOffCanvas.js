import React, { useContext } from 'react'
import { Badge, Button, Col, Container,   Offcanvas, Row } from 'react-bootstrap';
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

const CartOffCanvas = (props) => {
  const crtCtx = useContext(CartContext);

  return (
    <Offcanvas placement='end' show={props.show} onHide={props.hide}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>
         CART
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
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
            <Row className='mb-2' style={{borderBottom:'1px solid gray',alignItems:'center'}}>            
            <Col lg={4}  sm={4} className='d-flex align-items-center' >
            <img src={item.imgUrl} alt="" style={{width:'100px'}}/>
            <p style={{marginLeft:'5px'}}> {item.name}</p> 
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
   
    
      <Container>      
        <h2>Total Amount: ${crtCtx.totalAmount}</h2> 
      </Container>
      
      <Button onClick={props.hide}>Purchase</Button>
      </Offcanvas.Body>
  </Offcanvas>
  )
}

export default CartOffCanvas
