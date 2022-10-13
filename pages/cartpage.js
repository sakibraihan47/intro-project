const Cart = ({ cart, addToCart, removeCartItem, clearCart, total }) => {
  console.log(cart, addToCart, removeCartItem, clearCart, total);
  return (
    <>
      <div>This is your Shopping Cart</div>

      <div>
        <ol>
          <li>
            <span>Product 1 </span>
            <span> + </span>
            <span>quantity </span>
            <span> - </span>
            <span>price</span>
          </li>
        </ol>
      </div>
      <div>Clear All</div>
      <div>Checkout</div>
    </>
  );
};

export default Cart;
