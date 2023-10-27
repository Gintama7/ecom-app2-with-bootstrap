import React from 'react'
import { productsArr } from './Products';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const ProductItem = (props) => {
// const [item,setItem] = useState('');
let item=[];
 for(let i=0;i<productsArr.length;i++)
 {
    if(props.id === productsArr[i].id)
    {
        item = productsArr[i];
    }
 }
 console.log(item);

  return (
    <Container className='mt-3 d-flex align-items-center justify-content-start'>
        <Row>
          <Col lg={6}>   
          <Carousel>
      <Carousel.Item>
        <img alt="First slide" src={item.imageUrl} style={{width:'300px',height:'200px'}}/>
        <Carousel.Caption>
          <h3>{item.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="Second slide" src='https://www.pixelstalk.net/wp-content/uploads/2016/06/Wallpaper-HD-color-images.jpg' style={{width:'300px',height:'200px'}} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img alt="Third slide" src='https://www.pixelstalk.net/wp-content/uploads/2016/06/Color-Wallpapers-images-free-download.jpg' style={{width:'300px',height:'200px'}}/>
      </Carousel.Item>
    </Carousel></Col>
          <Col lg={6}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consectetur cumque voluptas nesciunt libero architecto eos? Saepe provident nemo animi, cumque eveniet unde labore vel mollitia minima optio, possimus et.
          </Col>
        </Row>
    
    </Container>
  )
}

export default ProductItem
