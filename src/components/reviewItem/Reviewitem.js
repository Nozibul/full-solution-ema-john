import React from 'react';

const Reviewitem = (props) => {
    const {name, price ,quantity, key} = props.product
    return (
        <div className="product">
            <div>      
                <h4 className="product-name">{name}</h4>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <button onClick={()=>(props.handleRemove(key))} className="bnt-purchase">Remove</button>
            </div>
        </div>
    );
};

export default Reviewitem;