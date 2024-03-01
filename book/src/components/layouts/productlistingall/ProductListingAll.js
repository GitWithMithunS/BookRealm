import React from "react";
import './productlistingall.style.css'
import ProductListingCard from "../../cards/product-listing-card/product-listing-card/ProductListingCard";
import { book } from "../../../util/BookData";

export const ProductListingAll = () => {
  return (
    <section>
        <div className="container">
            <div className="grid-container">
              {book.map((book) => {
                return (
                <div key={book.id} className="grid-item">
                  <ProductListingCard  bookData={book}/>
                </div>
                )
              })}

            </div>
        </div>
    </section>
  )
}
