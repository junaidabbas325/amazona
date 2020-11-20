import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
import Rating from './Rating';

const Card = (e) => {
    const product = e.product
    console.log(product)
    return(
      
      <>  
        <div className="mainContainer">
            <div className="CardMain">
               <Link to={`/product/${product._id}`}><div className="Card" >
                    <img src={product.image} alt="name"/>
                    <div className="cardItemDetails">
                    <h1>{product.name}</h1>
                    <h2>{product.price} $</h2>
                    <div className="reviews">
                    <Rating rating={product.rating} /> <span >{product.numReviews} reviews</span>
                    </div>
                    </div>                    
                </div>
                </Link>
            </div>
         </div>
      </>
    )
}
export default Card;