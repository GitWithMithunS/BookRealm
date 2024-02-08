import React from "react";
import './productListingCard.styles.css';
import { Link } from 'react-router-dom';
import ProductImage from '../../../assets/books-images/1.jpg'


const ProductListingCard = ({ bookData }) => {
    return (
        <div className="product-listing-card">
            <div className="product-listing-img-container">
                <img src={ProductImage} alt="product-listing" className="product-listing-image" />
            </div>
            <div className="product-listing-details-container">
                <h3>Write fast</h3>
                <p className="author-name">Raghav</p>
                <p className='pricing'>&#8377;10000</p>
            </div>
            <div className="card-btn-container">
                <Link to={'#'} className="product-listing-button">Add To Cart</Link>
            </div>
        </div>
    )
}

export default ProductListingCard;