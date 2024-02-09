import React from "react";
import './productlistingall.style.css'
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";

export const ProductListingAll = () => {
  return (
    <section>
        <div className="container">
            <div className="grid-container">
                <div className="grid-item">
                  <ProductListingCard/>
                </div>
                <div className="grid-item">
                  <ProductListingCard/>
                </div>
                <div className="grid-item">
                  <ProductListingCard/>
                </div>
                <div className="grid-item">
                  <ProductListingCard/>
                </div>
                <div className="grid-item">
                  <ProductListingCard/>
                </div>
                <div className="grid-item">
                  <ProductListingCard/>
                </div>
                <div className="grid-item">
                  <ProductListingCard/>
                </div>
                <div className="grid-item">
                  <ProductListingCard/>
                </div>
                <div className="grid-item">
                  <ProductListingCard/>
                </div>
            </div>
        </div>
    </section>
  )
}
