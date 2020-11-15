import React, { useEffect } from 'react';
import Stars from '../Components/Stars'
import './style/SingalGig.css';
import {Link} from 'react-router-dom'
import { detailsProduct } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
const SingalGig = (props) => {
    const productId = props.match.params.id
    const productDetails = useSelector((state) => state.productDetails)
    const {products, loading} = productDetails
    const product = products
    console.log(products, loading)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(detailsProduct(productId))       
    }, [dispatch])
    
    return(
        <>
        <Link to="/Explore">GO Back</Link>
         {
            loading ? (
                <h1>loading</h1>
            ) : (
                <div className="bodySize">
        <div className="displayIMG">
            <img src={product.image} />
            </div>
            <div className="detailsRight">
                <p>Name</p>
                <h1>{product.name}</h1>
                <h4>{product.description}</h4>
                <h2 className="cat">{product.category}</h2>
                <div className="brandCSS">
                <p >Brand</p>
                <h2>{product.brand}</h2>
                </div>
                <div className="ratingCSS">
                <Stars Rating={product.rating} />
                </div>     
                <div className="priceTag">
                    Price <br />
                    <h1>${product.price}</h1>
                </div>   
                <div  className="AddtoCartButton">
                    <button>Add To Cart</button>
                </div>      
            </div>
            <div className="otherDetails">
                Find More Just <Link to="/Explore">click here</Link>
         </div>
        </div>
            )
        }
        
        
        </>
    )
}
export default SingalGig