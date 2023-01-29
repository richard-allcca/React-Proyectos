import React, { useContext } from 'react';
import { ShoppContext } from './../context/ShoppContext';
import ProductItem from './ProductItem';
import '../style/shoppStyle.css';
import CartItem from './CartItem';
import Total from './Total';


const ShoppingCart = () => {
  const { state, addToCart, deleteFromCart, clearCart } = useContext(ShoppContext);
  const { products, cart } = state;

  const getProductsItems = products.map((item) => {
    return <ProductItem key={ item.id } data={ item } addToCart={ addToCart } />;
  });

  const getCartItem = cart.map((item) => {
    return <CartItem key={ item.id } data={ item } deleteFromCart={ deleteFromCart } />;
  });

  return (
    <div className='shoppContainer'>
      <h2>Shopping Cart</h2>

      <div className="produc-content">
        <h3>Productos</h3>
        <article className="box grid-responsive">
          { getProductsItems }
        </article>
      </div>

      <div className="cart-content">
        <h3>Carrito</h3>
        <article className='cart-article' >
          { getCartItem }
        </article>
        <button className='btn-cart' onClick={ clearCart } >Limpiar Carrito</button>
      </div>

      <Total data={ cart } />

    </div>
  );
};

export default ShoppingCart;