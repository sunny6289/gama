import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd)=>{
    // write code here
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if(existingItem){
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem);
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
    cartIsOpen: false,
    setCartIsOpen: ()=>{},
    cartItems: [],
    addItemtoCart: ()=>{}
})

export const CartProvider = ({children})=>{
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemtoCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>total + cartItem.quantity,0);
        setCartCount(newCartCount);
    },[cartItems])
    const value = {cartIsOpen,setCartIsOpen,addItemtoCart,cartItems,cartCount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}