import React from "react";
import Showcase from "../../components/layouts/showcase/Showcase.js";
import ProductListing from "../../components/layouts/product-listing/ProductListing.js";
import Footer from '../../components/layouts/footer/footer';

const HomePage = () => {
    return (
        <section>
            <Showcase />
            <ProductListing />
            <Footer/>
        </section>
    )
}

export default HomePage;