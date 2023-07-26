import { ProductContext } from '@/context[draft]/ProductContext'
import React, { useContext, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Button } from '..'
import { instance } from '@/axios/config'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { addProducts, fecthProducts, removeProducts, updateProducts } from '@/actions/products'

// 

const ProductList = () => {
    // const { products, fecthProducts, isLoading, error, addProducts, removeProducts, updateProducts } = useContext(ProductContext)

    const dispatch: Dispatch<any> = useDispatch();
    const { products, isLoading, error } = useSelector((state: any) => state.products)

    // const { state, dispatch } = useContext(ProductContext)
    useEffect(() => {
        dispatch(fecthProducts());
    }, []);

    // dispatch(addProducts(products));
    // dispatch(removeProducts(products))
    // dispatch(updateProducts(products))

    if (isLoading) return <Skeleton count={3} height={35} />
    if (error) return <div>{error}</div>
    return (
        <div>
            {products?.map((item: any) => {
                return (
                    <div key={item.id}>
                        {item.name}
                        <Button type='primary' onClick={() => dispatch({ type: "cart/add", payload: { ...item, quantity: 1 } })}>Add to car</Button>
                    </div>
                )
            })}
{/* 
            <Button type="primary" onClick={() => addProducts({ name: "Producct D" })}>Add products</Button>
            <Button type="primary" onClick={() => updateProducts({ name: "Producct D update", id: 4 })}>Update products</Button>
            <Button type="primary" onClick={() => removeProducts({ id: 4 })}>Delete products</Button> */}

        </div>
    )
}

export default ProductList