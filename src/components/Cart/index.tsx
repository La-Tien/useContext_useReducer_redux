import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '..'


const Cart = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: any) => state.cart)
    console.log("item",items);
    
    return (
        <div>
            {items?.map((item: any) => (
                <div key={item.id}>
                    {item.name}
                    {/* {item.name} - {item?.quantity} - {item.price * item.quantity} */}
                    <Button type='primary' onClick={() => dispatch({ type: "cart/increase", payload: item.id })}>+</Button>
                    <label> {item.quantity} </label>
                    <Button type='primary' onClick={() => dispatch({ type: "cart/decrease", payload: item.id })}>-</Button>
                </div>
            ))}
            total: {items.reduce(function (sum: any, item: any) {
                    return sum + item.price * item.quantity;
                }, 0)}
        </div>
    )
}

export default Cart