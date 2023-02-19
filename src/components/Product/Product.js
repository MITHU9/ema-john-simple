import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className='details-part'>
                <img src={img} alt="" />
            </div>

            <div className='details-part'>
                <h4 className='product-name'>{props.product.name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock-order soon</small></p>
                <button 
                className='cart-btn'
                onClick={() => props.handleAddProduct(props.product)}>

                    <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>

        </div>
    );
};

export default Product;