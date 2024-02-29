import React from "react";
import './productListingCard.styles.css';
import { Link } from 'react-router-dom';


const ProductListingCard = ({ bookData }) => {
    return (
        <div className="product-listing-card">
            <div className="product-listing-img-container">
                <img src={bookData.image} alt="product-listing" className="product-listing-image" />
            </div>
            <div className="product-listing-details-container">
                <h3>{bookData.title}</h3>
                <p className="author-name">{bookData.authors.slice(0,80)}</p>
                <p className='pricing'>&#8377;{bookData.price}</p>
            </div>
            <div className="card-btn-container">
               
                <Link to={`/book-details/${bookData._id}`} className="product-listing-button"> <button className="btn-addcart">Add To Cart</button></Link>

            </div>
        </div>
    )
}

export default ProductListingCard;