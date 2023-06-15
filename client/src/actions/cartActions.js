export const addToCart = (fuel, quantity, variant) => (dispatch, getState) => {

    var cartItem = {
        name: fuel.name,
        _id: fuel._id,
        image: fuel.image,
        variant: variant,
        quantity: quantity,
        prices: fuel.prices,
        price: fuel.prices[0][variant] * quantity
    }

    if(cartItem.quantity>10)
    {
        alert('You cannot add more than 10 quantities')
    }
    else{
        if(cartItem.quantity<1)
        {
            dispatch({type:'DELETE_FROM_CART',payload:fuel})
    
        }
        else
        {
        dispatch({ type: 'ADD_TO_CART', payload: cartItem })
        }
    }

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

} 



export const deleteFromCart=(fuel)=>(dispatch,getState)=>{

    dispatch({type:'DELETE_FROM_CART',payload:fuel})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))


}