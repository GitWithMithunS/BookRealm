import React from "react";
import './bookpage.style.css'
import Navbar from '../../components/layouts/navbar/Navbar';
import SearchInputForm from "../../components/form/searchInputForm/Searchinputform";
import ProductListing from "../../components/layouts/product-listing/ProductListing";



// import Footer from '../../components/layouts/footer/Footer';

const BooksPage = () => {
    return (
        <section>
            <Navbar darkTheme={true} />
            
            <div className="search-container val">
                <h2>Find the <span className="text-primary">Books</span> that you want</h2>
                <SearchInputForm darkTheme={false} />
            </div>

            <ProductListing/>
            {/* <Footer /> */} 
        </section>
    )
}

export default BooksPage;