import React from 'react';
import useCart from '../Hooks/useCart';
import useProduct from '../Hooks/useProduct';
import Cart from '../Cart/Cart'
import Reviewitem from '../reviewItem/Reviewitem';
import { clearCart, deleteFromDb } from '../../utilites/fakedb';
import { NavLink ,useHistory } from 'react-router-dom';

const Order = () => {
    // useProduct func e je product paoa jabe segulo akhne ante func k call korte hobe and
    // destructure er hisebe oi return value ta k akane dibo
    // useProduct k call korle ter modhhe j product gulo ase segulo destructure er products er vitore jabe
    const [products] = useProduct()
    const [cart, setCart] = useCart(products) // parameter soho phathate hobe

    // jehetu useState  k akhne call kra hoase so handle func ta akhane create hobe
    const handleRemove = key => {
        // console.log(key)
        const newCart = cart.filter(product=> product.key !== key);
        setCart(newCart);// akhnn btn e click korle UI theke remove hobe but local storage theke remove hobe na 
        // sejonno jokhon reload dibo abr UI te sob show korbe , se jonno localStorage theke remove korte hobe.

        // auto import korte hobe, and ata call korle localStorage thekeo delete hobe
        deleteFromDb(key)
    }

    //54-2 Create order placed and clear cart and stored data
    const history = useHistory()
    const handlOrder =()=>{
        // history.push("/place")
        history.push("/shipping")
        setCart([])// UI  er sob product gulo delete hoa jabe
        clearCart() // localStorage theke sob delete hoa jabe
    }
    return (
        <div>
            {/* <h3>{products.length}</h3>
            <h3>{cart.length}</h3>
            <h2>This is Order Review</h2>
            <Cart carts ={cart} /> */}

            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product=> <Reviewitem
                              key={product.key}
                              product={product}
                              handleRemove ={handleRemove}
                              />)
                    }
                </div>
                <div className="cart-container">
                        <Cart carts = {cart}>
                            
                            <div className="order">
                               <button onClick={handlOrder} className="cart-btn">Place order</button>
                            </div>
                      
                        </Cart> 
                </div>
            </div> 
        </div>
    );
};

export default Order;