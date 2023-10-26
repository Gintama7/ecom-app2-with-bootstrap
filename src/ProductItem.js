import React, { useState } from 'react'
import { productsArr } from './Products';
import { Carousel, Container, Image } from 'react-bootstrap';

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
    <Container className='mt-3 align-items-center justify-content-end'>
        
      <Carousel style={{width:'200px', height:'200px'}}>
      <Carousel.Item>
        <Image text="First slide" src={item.imageUrl} />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image text="Second slide" src='https://www.pixelstalk.net/wp-content/uploads/2016/06/Wallpaper-HD-color-images.jpg' fluid />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image text="Third slide" src='https://www.pixelstalk.net/wp-content/uploads/2016/06/Color-Wallpapers-images-free-download.jpg' fluid/>
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default ProductItem
