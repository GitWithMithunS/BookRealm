import React, { useContext } from 'react';
import './CartItemContainer.style.css';
import { cartContext } from '../../../app';
import CartItemCard from '../../cards/cart-item-cart/CartItemCard';


export const CartItemContainer = () => {
  const { cartItem, totalAmount } = useContext(cartContext)
  console.log('cartitem container')
  console.log(cartItem)
  return (
    <section>
      <div className="card-item-container">
        <div className="container">
          <h2>Cart</h2>
          {cartItem.map((item) => (
            <CartItemCard key={item.id} bookdata={item} />
          ))}
          <h2>Total Amount = &#8377;{totalAmount}</h2>
          <button className="button-primary">Proceed to Checkout</button>
        </div>
      </div>
    </section>
  )
}