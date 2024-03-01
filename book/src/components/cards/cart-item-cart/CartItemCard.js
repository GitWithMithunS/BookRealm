import React, { useContext } from 'react';
import './cart-item-card.style.css';
import {cartContext} from '../../../app';

const CartItemCard = ({bookdata}) => {

    const { cartItem, setCartItem } = useContext(cartContext);
    console.log(bookdata)
    const handleRemove = () => {
        console.log(bookdata);
        setCartItem(cartItem.filter((item) => item._id !== bookdata._id));
    }

    return (
        <section className="cart-item">
            <div className="cart-item-img-container">
             <img src={bookdata.image} alt="cart-item-img" className="cart-item-img" />
         </div>
         <div className="cart-item-content-container">
                <h3>{bookdata.title}</h3>
                <p>{bookdata.authors}</p>
                <h3 className="cart-item-price">&#8377;{bookdata.price}</h3>

                <button onClick={handleRemove} className='delete_btn'>Remove from Cart</button>
            </div>
        </section>
    )
}

export default CartItemCard;