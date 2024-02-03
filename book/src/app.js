import React from "react";
import {Routes, Route } from 'react-router-dom';


import HomePage from "./pages/homepage/homepage";
import BooksPage from "./pages/bookspage/BooksPage.js";
// import CartPage from "./pages/cartpage/CartPage";
import BookDetailsPage from "./pages/bookdetailspage/BookDetails.js";
// import Login from "./pages/loginpage/Login";
// import SignUp from "./pages/signup-page/Signup";
// import ScrollToTop from "./components/util/ScrollToTop";
// import SearchPage from "./pages/searchpage/SearchPage";

const App = ()=> {
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                {/* <Route path="/cart" element={<CartPage />} />
                <Route path="/search" element={<SearchPage />} /> */}
                <Route path="/book-details/:id" element={<BookDetailsPage/>} />
                {/* <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} /> */}
            </Routes> 
        </div>
    )
}

export default App;