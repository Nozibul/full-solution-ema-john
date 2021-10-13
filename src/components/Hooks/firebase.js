import { useState } from "react"
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = ()=>{
    const [user ,setUser] = useState({})
    const [error, setError] = useState({})

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInGoogle = () =>{
      return  signInWithPopup(auth, googleProvider)
       // akahne ker kaj ta login er moddhe kora holo redirect er jonnno  
     
    }

    // abserve whether user auth state change or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
    },[])

    const logOut = ()=>{
        signOut(auth)
        .then(() => {
            setUser({}) // signout hoa gele user k faka kore dibe 
          })
          .catch((error) => {
            setUser(error.message)
          });
    }
  

    return {
        signInGoogle, // ai func ta btn e call hoa kaj korbe puro ta
        user,
        error,
        logOut
    }
   

}

 export default useFirebase ;