import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import {
    productDetailsReducer,
    productListReducer,
  } from './reducers/productReducers';

const initialState = {
  cart:{
    cartItems: localStorage.getItem('cartItems') ? JSON.parse( localStorage.getItem('cartItems')) : []
  }
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
});

//FOR CHROME DEV TOOLS
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//CREATING STORE FOR STATES
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;