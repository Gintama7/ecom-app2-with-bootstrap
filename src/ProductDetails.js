import React from 'react'
import { useParams } from 'react-router-dom'
import ProductItem from './ProductItem';

const ProductDetails = () => {
    const params = useParams();
 console.log(params.id);
  return (
    <div>
      {params.id==='p1' && <ProductItem id={params.id}/>}
      {params.id==='p2' && <ProductItem id={params.id}/>}
      {params.id==='p3' && <ProductItem id={params.id}/>}
      {params.id==='p4' && <ProductItem id={params.id}/>}
    </div>
  )
}

export default ProductDetails
