import { instance } from "@/axios/config";
import { productReducer } from "@/reducers/ProductReducer";
import { pause } from "@/utils/pause";
import { produce } from "immer";
import { createContext, useReducer, useState } from "react";

export const ProductContext = createContext({} as any);

type ProductProviderProps = {
    children: React.ReactNode;
}

const initialState = {
    products: [],
    isLoading: false,
    error: ""
}
const ProductProvider = ({ children }: ProductProviderProps) => {

    // const [products, setProducts] = useState<any[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string>("");

    const [state, dispatch] = useReducer(produce(productReducer), initialState)
    
    


    

    return (
        <ProductContext.Provider value={{ 
            state, dispatch
            // products, 
            // isLoading, 
            // error, 
            // fecthProducts, 
            // addProducts, 
            // removeProducts, 
            // updateProducts 
            }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;