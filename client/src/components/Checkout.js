import React from "react"
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from "../actions/orderActions"
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function Checkout({subtotal}) {

    const orderstate = useSelector(state => state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()
    function tokenHandler(token)
    {
        console.log(token);
        dispatch(placeOrder(token , subtotal))
    }

  return (
    <div>
        
        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}
        {success && (<Success success='Your order is placed successfully'/>)}
        
        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        stripeKey='pk_test_51M1rMCSBib0HCneHE0m0Jlx8TcuqFljeVkIQBRJCr0LkpmHrId5VTFvWy224UKn10A0lzKobBu5rXeSe50Ix3e7100EnUfS3wZ'
        currency='INR' 
        >


                <button className='btn'>CHECKOUT</button>

        </StripeCheckout>

    </div>
  )
};  

