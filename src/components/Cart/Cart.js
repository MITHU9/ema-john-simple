import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd)=> total + prd.price , 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;    
    }

    let shiping = 0;
    if (total > 40) {
        shiping = 0; 
    }
    else if(total > 20){
        shiping = 4.99;
    }
    else if (total > 0) {
        shiping = 12.99;
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = total + shiping + Number(tax);

    return (
        <div>
            <div className='cart-details'>
                <h4>Order Summary</h4>
                <p>Items Ordered: {cart.length} </p>
                <p>Product Price: ${total.toFixed(2)}</p>
                <p>Shiping Cost: ${shiping}</p>
                <p>Tax + Vat: ${tax}</p>
                <p>Total Price: ${grandTotal.toFixed(2)}</p>
                
            </div>  
        </div>
    );
};

export default Cart;