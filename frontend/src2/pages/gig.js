import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import Card from '../Components/Card';
const Gig = (props) => {
    
    const dispatch = useDispatch();
    const {products, loading} = useSelector((state) => state.productList);
  
  useEffect( async () => {
    dispatch(listProducts());
  }, [dispatch]);
    return(
        <>
        <div className="bodySize">
            <Link to="/">GO Back</Link>
        {
            loading ? (
                <h1>loading</h1>
            ) : (
                products.products.map((product, index)  => {
                    return <Card product={product} key={index} />   
                }) 
            )
        }
        </div>
        </>
    )
}
export default Gig