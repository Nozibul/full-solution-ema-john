//53-4 Recap useProducts, create useCart and use it

import { useEffect, useState } from "react"

const useProduct = () =>{
    const [product, setProduct] = useState([]) ;
    useEffect(()=> {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    // akadhik jinis k return korte hole seta k akta array er moddhe rakte hoi bec func theke
    // 1 ta er besi return kora jai na, so akhne akta array return holo
    return [product , setProduct] ; 
}

export default useProduct ;

// now ai function k call kore return value nia jekono jai gai use kora jabe.
