import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar.js";
import SearchInputForm from "../../form/searchInputForm/Searchinputform.js";;

const Showcase = () => {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>The <span className="text-primary">Book </span>You Need</h1>
                <p>Best Books for all your needs</p>
                
                <SearchInputForm darkTheme={ true }/>
            </div>
        </section>
    )
}

export default Showcase;