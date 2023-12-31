import { produce } from "immer";

const inittialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string }

export const productReducer = (state = inittialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {

            // FETCHING
            case "product/fetching":
                draftState.isLoading = true;
                break;
            case "product/fetchingSuccess":
                draftState.products = action.payload
                break;
            case "product/fetchingFailed":
                draftState.error = action.payload
                break;
            case "product/fetchingFinally":
                draftState.isLoading = false;
                break;

            // ADD
            case "product/addProduct":
                draftState.products.push(action.payload);
                break;
            case "product/updateProduct":
                const product = action.payload
                draftState.products = state.products.map((item: any) => item.id === product.id ? product : item)
                // draftState.products[product.id] = product;
                break;
            case "product/deleteProduct":
                const id = action.payload
                draftState.products = state.products.filter((item: any) => item.id !== id)
                break;

            default:
                state;
                break;
        }
    })

}