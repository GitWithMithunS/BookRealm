import React, { useEffect, createContext, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import fire from "./firebase/Firebase..js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomePage from "./pages/homepage/homepage";
import BooksPage from "./pages/bookspage/BooksPage.js";
import BookDetailsPage from "./pages/bookdetailspage/BookDetails.js";
import { Signup } from "./pages/signuppage/signup.js";
import { Login } from "./pages/loginnpage/login.js";
import CartPage from "./pages/cartpage/Cartpage.js";
import ScrollToTop from "./components/util/ScrollToTop";
import SearchPage from "./pages/searchpage/SearchPage";


export const userContext = createContext({});
export const cartContext = createContext({});

const App = () => {
    const auth = getAuth(fire);

    const [authenticateUser, setauthenticateUser] = useState(null)
    const [cartItem, setcartItem] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user, "from app.js")
                setauthenticateUser(user)
            } else {
                setauthenticateUser(null)
            }
        })
    }, [])
    

    useEffect(() => {

        let total = 0;
        cartItem.forEach((item) => {
            total = total + parseInt(item.price);
        })
        setTotalAmount(total);
    },[cartItem])


    return (
        <ScrollToTop>
        <userContext.Provider value={authenticateUser}>
            <cartContext.Provider value={{cartItem , totalAmount ,setcartItem}}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/search" element={<SearchPage />} /> 
                    {/* <Route path="/search" element={<SearchPage />} /> */}
                    <Route path="/book-details/:id" element={<BookDetailsPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </cartContext.Provider>
        </userContext.Provider>
        </ScrollToTop>
    )
}

export default App;