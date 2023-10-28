import React from "react";

const CartContext = React.createContext({
    items:[],
    totalQuantity:0,
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    incrementItem:(item)=>{}
})

export default CartContext;