import React from 'react'
import './detailssection.style.css'
import BookDetailsImg from '../../../assets/books-images/1.jpg'

export const DetailsSection = () => {
  return (
    <section className="deatil-section-container">

    <div className="container">
        <div className="flex-container">
            <div className="book-img-container">
                <img src={BookDetailsImg} alt="book"  className='bookimg'/>
                                {/* <img src={ProductImage} alt="product-listing" className="product-listing-image" /> */}
            </div>
            <div className="book-detail-container">
                <h2>To Kill A Mockingbird</h2>
                <p className='text-primary'>Harper Lee</p>
                <p className='book-description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditi corrupti qssint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
                <p><b>Language : </b>English</p>
                <p><b>Book Length : </b>420 pages</p>
                <h3> &#8377;740</h3>
                {/* <a href="#" className='cart'>Add to cart</a> */}
                <a href="#" className='cart-btn'>Add to cart</a>
            </div>
        </div>
    </div>
    </section>
  )
}
