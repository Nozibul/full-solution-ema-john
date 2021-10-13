import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { clearCart } from '../../utilites/fakedb';
import useAuth from '../Hooks/useAuth';
// import Order from '../Order-Review/Order';
import './shipping.css'


const Shipping = () => {
  
    const {user} = useAuth() ;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  

    // const history = useHistory()
    // const handleBtn =()=>{
    //      history.push('/place')
         
    //      clearCart()
    //     //  setCart([])
    // }
    return (
         <div>
             {/* <h2>This is shipping</h2> */}
            {/* <button onClick={handleBtn}>conform</button> */}
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" defaultValue={user.displayName} {...register("name")} />                
                <input placeholder="email" defaultValue={user.email}  {...register("email",  { required: true })} />
                <input placeholder="address"  {...register("address", { required: true })} />                
                {/* <input placeholder="phone number" defaultValue="" {...register("phone")} />                 */}

                {errors.address && <span className="error">This field is required</span>}
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;