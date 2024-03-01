
import React, { useContext, useEffect, useState } from 'react';
import './detailssection.style.css';
import { useParams, useNavigate } from 'react-router-dom';
import { book } from '../../../util/BookData';
import { userContext, cartContext } from '../../../app';



export const DetailsSection = () => {
  const { id } = useParams(); //console.log(id)
  const [bookdata, setbookdata] = useState({})
  const user = useContext(userContext)
  const { cartItem, setcartItem } = useContext(cartContext)

  const navigate = useNavigate()

  useEffect(() => {
// //     let newData = book.filter((book) => book._id === id)
//     // console.log(newData[0])
//     setbookdata(newData[0])     //[0] to get the first element/object of the newbook array
//   })


//   const handleAddToCart = () => {
//     if(user) {
//         //add to cart
//         setCartItems([...cartItems, bookData]);
//         alert(`The book ${bookData.book_name} is added to the cart`);
//     } else {
//         navigate('/login');
//         alert("Please Login or Sign up first..");
//     }
// }

    let newData = book.filter((book) => book._id == id)
    // console.log(newData[0])
    setbookdata(newData[0])     //[0] to get the first element/object of the newbook array
  }, [id])

  const handelAddClick = () => {
    // console.log("from handeladdclick",user)
    if (user) {
      //add to cart
      setcartItem([...cartItem, bookdata])                                       // '...' -> spread operator
      console.log("items in cart are", cartItem)
      alert(`The book ${bookdata.title} is added ot the cart`)
      navigate('/cart')
    } else {
      //redirect to login page
      navigate('/login')
      alert('Please login in to your account to proceed')
    }
  }



  return (
    <section className="deatil-section-container">
      <div className="container">
        <div className="flex-container">
            <div className="book-img-container">
                <img src={bookdata.image} alt="book"  className='bookimg'/>
                {/* <img src={ProductImage} alt="product-listing" className="product-listing-image" /> */}
                {/* <img src={ProductImage} alt="product-listing" className="product-listing-image" /> */}
            </div>
            <div className="book-detail-container">
                <h2>{bookdata.title}</h2>
                <p className='text-primary'>{bookdata.authors}</p>
                <p className='book-description'>{bookdata.subtitle}</p>
                <p><b>Language : </b>{bookdata.language}</p>
                <p><b>Book Length : </b>{bookdata.book_length}</p>
                <h3> &#8377;{bookdata.price}</h3>
                {/* <a href="#" className='cart'>Add to cart</a> */}
            <a onClick={handelAddClick} className='button-primary'>Add to cart</a>
          </div>
        </div>
      </div>
    </section>
  )
}