import React, { useContext, useEffect, useState } from 'react'
import CartContext from './cart-context'
import axios from 'axios';
import AuthContext from './auth-context';

const CartProvider = (props) => {

    const [items,setItems] = useState([]);
    const [totalAmount,setTotalAmount] = useState(0);
    const authCtx = useContext(AuthContext);
    

    const addItemToCartHandler=(item)=>{
    const newMail =localStorage.getItem('email');
        // const existingItem = items.find((obj) => obj.id === item.id);
       
        // if (existingItem) {
        //   const updatedCart = items.map((cartItem) =>
        //     cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
        //   );        
        //   const updatedAmount= totalAmount+(existingItem.price*existingItem.quantity);      
         
          axios.post(`https://crudcrud.com/api/34afb79414254181a3945ebceddda921/cart${newMail}`,
          item
          ).then((res)=>{
            console.log('added successfully');
          }).catch(err=>{
            console.log(err);
          })
        // } else {         
        //   axios.post(`https://crudcrud.com/api/a3d85a9857cf4eedb0db1e92e5bebfae/cart${newMail}`,
        //    {item}
        //   ).then((res)=>{
        //     console.log('new item added');
        //   }).catch(err=>{
        //     console.log(err);
        //   })
        // }
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
