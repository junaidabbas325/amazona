import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';

const Card = (props) =>{
    const product = props.product
    return(
        <>
        <Link to={`/products/${product._id}`}>
        <div className="mainCardDiv" >
                    <img src={product.image} alt={product.name} className="product_img" />
            <div className="infoSection" >
                    <h1>{product.name}</h1>     
                    <p>{product.description}</p><br/>
                    <h3 style={{float:"left"}}>{product.brand}</h3>
                        <Stars Rating={product.rating} /> <br/>
                    <h2 className="price">{product.price}</h2>       
            </div>
        </div>
        </Link>
        </>
    )
}
export default Card