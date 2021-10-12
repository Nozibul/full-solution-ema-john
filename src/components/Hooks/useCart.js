// 53-4 Recap useProducts, create useCart and use it

import { useEffect, useState } from "react"
import { getStoreCart } from "../../utilites/fakedb"

const useCart = (productss)=> { //import korate fakedb er sob products gulo ai parameter asse
  console.log(productss)  
  const [cart ,setCart] = useState([])
    useEffect(()=>{
        if(productss.length){
            const savedCart = getStoreCart() //getStoreCart er data sob savedCart e gelo
            //now data gulo rakte akta empty object nibo
            const storedCart = [];
            for(const key in savedCart){
             // console.log(key)
             // now ai key and products er vitre j key ase seta same kina and same hole variavle rakbo
             const addedProduct = productss.find(product=> product.key === key) ;
             if(addedProduct){// jodi addedProduct thake tahole conditon check korbe
               // jodi thake tahole er vitore saveCart er j key ase seta k addedProduct er quantity hisebe rakbe
               const quantity = savedCart[key]; // output : 2
               addedProduct.quantity = quantity;
               storedCart.push(addedProduct)
               
            }

        }
       setCart(storedCart)

    }
  },[productss])
   return [cart, setCart] ;
}

export default useCart ;
// ata k order review te import korbo