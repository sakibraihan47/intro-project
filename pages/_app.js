import { useEffect } from "react";
import Layout from "../components/layout";
import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  //using non redux STATE VARIABLES for state of cart

  const [cart, setCart] = useState({}); // add items
  const [total, setTotal] = useState(0); //total cost

  //imncluding useeffect on reload
  //also we need to make sure useeffect does not run everytime while navigating

  useEffect(() => {
    console.log("hey");

    localStorage.getItem("cart");
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", myCart);
  };

  const addToCart = (itemCode, qty, price, productname) => {
    //variable chnage values
    let myCart = cart;
    //cart is an object

    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, productname };
    }
    //new function to set cart
    setCart(newCart);
    //to save cart details in order to be there even if user reloads the page
    //to be able to mimic context on local storage
    saveCart(newCart);
  };
  //clear all for cart items
  //in react when set method is run, updating is not guranteed as soon as its clicked as its an  request
  const clearCart = () => {
    setCart({});
    saveCart({});
    //emtying the objects
  };

  const removeCartItem = (itemCode, qty, price, productname) => {
    //variable chnage values
    let newCart = cart;
    //cart is an object
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }

    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }

    //new function to set cart
    setCart(newCart);
    //to save cart details in order to be there even if user reloads the page
    //to be able to mimic context on local storage
    saveCart(newCart);
  };

  return (
    <Layout>
      <Component
        cart={cart}
        addToCart={addToCart}
        removeCartItem={removeCartItem}
        clearCart={clearCart}
        total={total}
        {...pageProps}
      />
    </Layout>
  );
}

export default MyApp;
