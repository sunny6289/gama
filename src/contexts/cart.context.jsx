import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


// import { createContext, useEffect, useState } from "react";

// const addCartItem = (cartItems, productToAdd)=>{
//     // write code here
//     const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
//     if(existingItem){
//         return cartItems.map((cartItem) => 
//         cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
//         : cartItem);
//     }
//     return [...cartItems, {...productToAdd, quantity: 1}];
// }
// const removeCartItem = (cartItems, productToRemove)=>{
//     const itemToRemove = cartItems.find((cartItem)=> cartItem.id === productToRemove.id);
//     if(itemToRemove.quantity>1){
//         return cartItems.map((cartItem)=> cartItem.id===itemToRemove.id ? {...cartItem,quantity: cartItem.quantity-1} : cartItem);
//     }
//     return remove(cartItems, productToRemove);
// }
// const remove = (cartItems, productToRemove)=>{
//     const itemToRemove = cartItems.find((cartItem)=> cartItem.id === productToRemove.id);
//     return cartItems.filter((cartItem)=> cartItem.id!== itemToRemove.id);
// }
// export const CartContext = createContext({
//     cartIsOpen: false,
//     setCartIsOpen: ()=>{},
//     cartItems: [],
//     addItemtoCart: ()=>{},
//     removeItemFromCart: ()=>{},
//     deleteItem: ()=>{},
//     totalPrice: 0
// })

// export const CartProvider = ({children})=>{
//     const [cartIsOpen, setCartIsOpen] = useState(false);
//     const [cartItems, setCartItems] = useState([]);
//     const [cartCount, setCartCount] = useState(0);
//     const [totalPrice, setTotalPrice] = useState(0);

//     const addItemtoCart = (productToAdd)=>{
//         setCartItems(addCartItem(cartItems,productToAdd));
//     }
//     // To decrease quantity of cart items
//     const removeItemFromCart = (productToRemove)=>{
//         setCartItems(removeCartItem(cartItems,productToRemove));
//     }
//     // To delete Item
//     const deleteItem = (productTodelete)=>{
//         setCartItems(remove(cartItems,productTodelete));
//     }
//     useEffect(()=>{
//         const newCartCount = cartItems.reduce((total, cartItem)=>total + cartItem.quantity,0);
//         setTotalPrice(cartItems.reduce((total,cartItem)=> total+(cartItem.price*cartItem.quantity),0));
//         setCartCount(newCartCount);
//     },[cartItems])
//     const value = {cartIsOpen,setCartIsOpen,addItemtoCart,cartItems,cartCount,removeItemFromCart,totalPrice,deleteItem};
//     return <CartContext.Provider value={value}>{children}</CartContext.Provider>
// }