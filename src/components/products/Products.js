
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './products.css'
import Rating from 'react-rating';

const Products = (props) => {
   // console.log(props.products) // props er vitore product and handler o add hoa jabe so hndler k akhon button a aadd korte parbo
    const { name , img , seller , price, stock, star}= props.products

    // fontawesome link
    // const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
               <img src={img} alt="" />
            </div>
            <div className="product-detail">
                <h3 className="product-name">Name: {name}</h3>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p> 
                <Rating 
                 initialRating={star}
                 emptySymbol="far fa-star rating-icon"
                 fullSymbol="fas fa-star rating-icon"
                 readonly
                />
                  <br />
                <button onClick={()=> props.handleToCart(props.products)} //jokhoni click korbo props.products er value 
                // ta ei handlToCart er vitore chole jabe and button e click korle seta handl finc theke useState e jabe 
                     className="bnt-purchase">
                   <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Products;