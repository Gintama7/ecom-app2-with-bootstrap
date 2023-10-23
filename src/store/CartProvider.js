import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {

    const [items,setItems] = useState([]);
    const [totalAmount,setTotalAmount] = useState(0);

    const addItemToCartHandler=(item)=>{
        const existingItem = items.find((obj) => obj.id === item.id);
  
        if (existingItem) {
          const updatedCart = items.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
          );
          setItems(updatedCart); 
          const updatedAmount= totalAmount+(existingItem.price*existingItem.quantity);       
          setTotalAmount(updatedAmount);
        } else {
          setItems([...items, { ...item}]);
          setTotalAmount(totalAmount+(item.price*item.quantity));
        }
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
        const updatedCart = items.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setItems(updatedCart);
        const updatedAmount= totalAmount+item.price;
        setTotalAmount(updatedAmount);
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
