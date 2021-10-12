
// use local storage as my database now
 const addDb = (name) => { // id er jaigai ja kisu dea jabe ,jehuto id set korbo so id name dilam bujar jonno
 
    // now 2nd parameter er value ta k update korte hobe se jono get kore dekte hobe kono value ase kina sekhane
 /*    const exists = localStorage.getItem(name);
    if(!exists){
        localStorage.setItem(name, 1)// 1st parameter ta key  2nd parameter ta holo value

    }
    else {
         let newCount = parseInt(exists) + 1 ;
         localStorage.setItem(name, newCount);
    } */

    // uporer moto alada kore kono name show na koria amra id ba name gulo k alada akta object er vitore rakte chai
    const exists = localStorage.getItem('shopping_cart'); //shopping cart ta local storage e ase kina check korbo
    
    let shopping_cart = {} ;// shopping_cart jodi na thake tahole new akta shopping_cart name e object create korlam
    // and jodi shopping_cart name e kono object thake tahole check korbo ter vitore kono name ba id ase kina

    if(!exists){ // shoppin_cart ase kina check korlam
        shopping_cart[name] = 1;//ei shopping_cart object er vitore name ta k ter attribute hisebe set korlam & value 1 thakbe thpkpn
    }
    else {
        // jodi shopping_cart ta string hisebe thake tahole shopping cart ta JSON.parse korte hobe object hisebe
        shopping_cart = JSON.parse(exists);//exists er value ta k stringfy theke parse kore object e nia ase then abr shoppin_cart e rakha holo
        if(shopping_cart[name]){
            shopping_cart[name] = shopping_cart[name] + 1;
           
        }
        else {
            shopping_cart[name] = 1
        }
       

    }

    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart)) //anme ta k stringfy na korle object object lekha utbe
 
}

//  remove korar age check korbo shoppping_cart ta localstorage e ase kina
const deleteFromDb = (name) => {
    const exists = localStorage.getItem('shopping_cart')

    // remove korte chaile dhekte hobe ter vitore kisu ase ki na jodi na thake tahole nicher condition kaj korbe
     if(!exists){ 

     }
     // jodi theke thahole shopping cart k parse korte hoeb
     else{
         const shopping_cart = JSON.parse(exists);
         delete shopping_cart[name]; //shopping_cart er vitore name thakle seta k delete kore dibo and baki name gulo storage set kore dibo
         localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart)) // stringfy na korle object object lekha utbe

     }
}

//49-3 (advanced) Load cart from local storage, find product
  const  getStoreCart= () => {
      const exists = localStorage.getItem('shopping_cart')
      return exists ? JSON.parse(exists) : {}  //jodi exists kore tahole parse korbe na hole empty object return korbe
  }

  const clearCart = () => {
      localStorage.removeItem('shopping_cart')
  } 

 export {addDb, deleteFromDb , clearCart ,getStoreCart} ;