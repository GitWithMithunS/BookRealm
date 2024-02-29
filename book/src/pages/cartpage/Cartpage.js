import React from "react";

import Footer from "../../components/layouts/footer/footer";
import Navbar from "../../components/layouts/navbar/Navbar";
import { CartItemContainer } from "../../components/layouts/cartitem-container/CartItemContainer";

const CartPage = () => {
    return (
        <section>
            <Navbar darkTheme={ true } />
            
            <CartItemContainer/>
            
            <Footer/>
        </section>
    )
}

export default CartPage;