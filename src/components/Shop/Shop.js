
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { addDb, getStoreCart } from '../../utilites/fakedb';
import Cart from '../Cart/Cart';
import Products from '../products/Products';
import './shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]) ; // sob data akhon products e

    //48-7 (advanced) Cart state setup, update cart and total on click
     const [cart, setCart] = useState([]) //akhane cart e kono product set hole seta Cart component e set hobe

     //49-6 (advanced) implement search to find products
     // product to be render on the UI
    const [displayProducts , setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        })
    },[])

//49-3 (advanced) Load cart from local storage, find product
 //localstorage er data gulo pete useEffect use korbo
    useEffect(()=> {
        const saveCart = getStoreCart()
        //  console.log(saveCart) // {B01K1IO3QW: 3} localstorage e set thake key golo pabo je gulo product er vitore silo
        if(products.length){
            // saveCart er vitore j key gulo ase ter upore loop chalia 
            // now product gulo add korbo 
            const addProduct = [] ;
            for (const key in saveCart){
                console.log(key, saveCart[key])
            // console.log(key);// B01DBGVB7K ,B01M18UZF5 akhon key gulo avbe pabo
            // then product gulo ber korte jer vitore sob product ase take call korvo
            // console.log(products) //upore useState e products er vitore sob data ase
                const saveProduct = products.find( product => product.key === key )
               // console.log(key, saveProduct) // B01LD4MGY4 undefined , akhn r undefined asbe na
             if(saveProduct){ // jodi product theke tahole vitore dhukbe
                const quantity = saveCart[key]; // saveCart er sob key gulo er wuantity paw jabe 
                saveProduct.quantity = quantity;
 
                 // ai saveProduct k cart er vitore ad korte pari akta array er vitore
                 addProduct.push(saveProduct) // ata akta new array te add holo
 
             }
           }
           setCart(addProduct)
           
         }

     }, [products])

   //48-6 (advanced) set eventhandler, pass eventhandler to child
     const handleToCart = (product) => { //akadhik button thaker karone parameter nite hobe and product component 
        // er data gulo handleToCart func er parameter set hobe.
        //  console.log(product.name)

        //54-3 Debug add to cart bug and update quantity of existing item
        const exist = cart.find(pd=> pd.key === product.key) //pd = cart er producr and product = click korle j product add hosse
        let  newCart = [];
        if(exist){
          const rest =cart.filter(pd=> pd.key !== product.key)
          exist.quantity = exist.quantity +1;
          newCart = [...rest, product]
        }
        else{
            product.quantity = 1 ;
             newCart = [...cart , product];//click korlei value ta product er vitore chole asbe then useState e jabe cart e
        }
        setCart(newCart);


        // add to local storage . button e click korle product er vitorer key gulo localstorage e set hobe
        addDb(product.key)
     }

    //49-6 (advanced) implement search to find products
       const handleSearch = nj => {
        //   console.log(nj.target.value) // phone ,laptop etc
        const searchText = nj.target.value ;
        const matchProduct = products.filter( product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchProduct)
        console.log(matchProduct.length)
      }

    return (
        // empty tag ata k fragment bole
        <> 
            <div className="input-area">
                <input onChange={handleSearch} type="text" placeholder="search product:"/>
            </div>

            <div className="shop-container">
                <div className="product-container">
                    {
                        // products.map( product => <Products // 49-6 er search product show korte ata r kaje lagbe na
                        displayProducts.map( product => <Products 
                            key={product.key}
                            products ={product}
                            handleToCart= {handleToCart} //jehetu Product component use korbo so Product er attribute hise handler k set korbo
                            ></Products>) //product gulo ai div e thakbe so data gulo k akahne dekhate hoeb
                    }

                
                </div>
                <div className="cart-container">
                    <Cart carts = {cart}> {/* cart component er props e carts ta chole jabe */}
                        <NavLink to="/order">
                            <div className="order">
                                <button className="cart-btn">Review Your order</button>
                            </div>
                        </NavLink>
                    </Cart>
                </div>
           </div>
        </>
    );
};

export default Shop;