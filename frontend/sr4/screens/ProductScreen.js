import React from 'react';
import Rating from '../components/Rating';
import './HomeScreen.css'
import {Link} from 'react-router-dom'
import { data } from './data';


const ProductScreen = (e) => {
    const productId = e.match.params.id
    const product = data.products.find((e) => e._id === productId)
    console.log(product, 'new product ')

    return(
      
      <>  
        <div>
              <Link to="/">Back to result</Link>
              <div className="row top">
                <div className="col-2">
                  <img
                    className="large"
                    src={product.image}
                    alt="name"
                  ></img>
                </div>
                <div className="col-1">
                  <ul>
                    <li>
                      <h1>{product.name}</h1>
                    </li>
                    <li>
                      <Rating  rating={product.rating} />
                    </li>
                    <li>Pirce : ${product.price}</li>
                    <li>
                      Description:
                      <p>{product.description}</p>
                    </li>
                  </ul>
                </div>
                <div className="col-1">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <div className="row">
                          <div>Price</div>
                          <div className="price">${product.price}</div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div>Status</div>
                          <div>
                            
                          </div>
                        </div>
                      </li>
                      
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      </>
    )
}
export default ProductScreen;