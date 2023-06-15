import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../actions/cartActions";


export default function Fuel({ fuel }) {
  const [quantity, setquantity] = useState(1)
  const [variant, setvariant] = useState('Normal')
  const dispatch = useDispatch()
  const x=fuel.avail;
  const y=quantity;
  const av=x-y;
  function addtocart() {
    
    dispatch(addToCart(fuel, quantity, variant))
  }

  return (
    <div className="shadow-lg p-1 mb-5 bg-white rounded" key={fuel._id}>
      <h1>{fuel.name}</h1>
      <img src={fuel.image} className="img-fluid" style={{ height: '150px', width: "200px" }} alt="" />
      <div className="flex-container">

        <div className="m-1 w-100">
          <p>Variant</p>
          <select className="form-control" value={variant} onChange={(e) => { setvariant(e.target.value) }}>
            {fuel.variants.map(variant => {
              return <option value={variant}>{variant}</option>
            })}
          </select>
        </div>
        <div className='m-1 w-100'>
          <p>Quantity(Lit)</p>
          <select className="form-control" value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>
            })}
          </select>
        </div>

      </div>

      <div className="flex-container">
        <div className="m-3 w-100">
          <h1 className="mt-1">Price : Rs.{fuel.prices[0][variant] * quantity}/-</h1>
        </div>
        <div className="m-2 w-100">
          <button className="btn" onClick={addtocart}>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
};
