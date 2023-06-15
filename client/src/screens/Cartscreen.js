import React from "react"
import {useSelector,useDispatch} from 'react-redux'
import {addToCart, deleteFromCart} from '../actions/cartActions'
import Checkout from "../components/Checkout"

export default function Cartscreen() {

    const cartstate=useSelector(state=>state.cartReducer)
    const cartItems=cartstate.cartItems
    var subtotal=cartItems.reduce((x,item)=>x+item.price,0)
    const dispatch=useDispatch()
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <h2 style={{fontSize:'40px',fontWeight:'600'}}>My Cart</h2>

                {cartItems.map(item=>{
                    return <div className='flex-container'>

                            <div className='text-start m-1 w-100'>
                                <h3>{item.name} [{item.variant}]</h3>
                                <h3>Price : {item.quantity} * {item.prices[0][item.variant]} = {item.price}</h3>
                                <h3 style={{display:'inline'}}>Quantity : </h3> 
                                <i className="fa fa-plus" aria-hidden="true" type="button" onClick={()=>{dispatch(addToCart(item , item.quantity+1 , item.variant))}}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" aria-hidden="true" type="button" onClick={()=>{dispatch(addToCart(item , item.quantity-1 , item.variant))}}></i>
                                <hr/>
                            </div>

                            <div className='m-1 w-100'>
                                <img src={item.image} style={{height:'80px' , width:'80px'}} />
                            </div>
                            <div className='m-1 w-100'>
                            <i className="fa fa-trash mt-3" aria-hidden="true" type="button" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                            </div>
    
                        </div>
                })}

            
        </div>
        <div className="col-md-4 text-end">
                <h4 style={{fontSize:'40px',fontWeight:'600'}}>SubTotal : {subtotal} /-</h4>
                <Checkout subtotal={subtotal}/>
        </div>
      </div>
    </div>
  )
};

