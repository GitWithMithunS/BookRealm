import React ,{useEffect,useState} from 'react'
import './detailssection.style.css'
import BookDetailsImg from '../../../assets/books-images/1.jpg'
import { useParams } from 'react-router-dom'
import { book } from '../../../util/BookData'

export const DetailsSection = () => {
  const {id} = useParams();
  // console.log(id)

  const [bookdata,setbookdata] = useState({})

  useEffect(() => {
    let newData = book.filter((book) => book._id == id)
    console.log(newData[0])
    setbookdata(newData[0])     //[0] to get the first element/object of the newbook array
  })

  return (
    <section className="deatil-section-container">

    <div className="container">
        <div className="flex-container">
            <div className="book-img-container">
                <img src={bookdata.image} alt="book"  className='bookimg'/>
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
                <a href="#" className='cart-btn'>Add to cart</a>
            </div>
        </div>
    </div>
    </section>
  )
}
