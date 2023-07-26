import { instance } from "@/axios/config";

export const fecthcart = () => async (dispatch: any) => {
    try {
        const data = await instance.get(`/cart`)
        dispatch({ type: "FETCHING_CART_SUCCESS", payload: data })
    } catch (error: any) {
    }
    finally {
    }
}

export const addcart = (product: any) => async (dispatch: any) => {
    try {
        const data = await instance.post(`/cart`, product)
        dispatch({ type: "ADD_CART", payload: data })
    } catch (error: any) {
    }
    finally {
    }
}
