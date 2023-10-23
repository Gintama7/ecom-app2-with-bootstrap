import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

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
    <div>
        
      {products.map((prod)=>(
        <div> 
            <h2>{prod.title}</h2> 
            <h3> {prod.price}</h3>
            <img src={prod.imageUrl} alt="" />
            <Button>Add to Cart</Button>
            </div>
           
      ))}
      
    </div>
  )
}

export default Products
