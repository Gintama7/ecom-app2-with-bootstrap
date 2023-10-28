import React, { useContext, useEffect, useState } from 'react'
import CartContext from './cart-context'
import axios from 'axios';
import AuthContext from './auth-context';

const CartProvider = (props) => {

    const [items,setItems] = useState([]);
    const [totalAmount,setTotalAmount] = useState(0);
    const [totalQuantity,setTotalQuantity] = useState(0);
    const authCtx = useContext(AuthContext);
    

    const addItemToCartHandler=(item)=>{
    const newMail =localStorage.getItem('email');
      
          axios.post(`https://crudcrud.com/api/2d20dce9d27a4beca1b432e8508d5830/cart${newMail}`,
          {...item,totalQuantity}
          ).then((res)=>{
            console.log('added successfully');
            setItems(prev=>[...items,res.data]);
          }).catch(err=>{
            console.log(err);
          })
       
    }

    const removeItemFromCartHandler =(id)=>{
        const existingItem = items.find((obj) => obj.id === id);

        if (existingItem.quantity!==1) {
          const updatedCart = items.map((cartItem) =>
            cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
          );
          setItems(updatedCart);
          const updatedAmount= totalAmount-existingItem.price;
          setTotalAmount(updatedAmount);
        } else if(existingItem.quantity===1) {
          const filteredItems = items.filter((item)=> item.id !== id);
          setItems(filteredItems);
          const updatedAmount= totalAmount-(existingItem.price*existingItem.quantity);
          setTotalAmount(updatedAmount)
        }
    }

    const incrementHandler=(item)=>{
        setItems(...items,item);
    }


    const cartContext = {
    items:items,
    totalQuantity:totalQuantity,
    totalAmount:totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler,
    incrementItem:incrementHandler,
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
