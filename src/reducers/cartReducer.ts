import { produce } from 'immer'
import React from 'react'

const initialState = {
    items: [],
} as { items: any[] }

 export const cartReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "cart/add":
                const existProductIndex = draftState.items.findIndex((item: any) => item.id === action.payload.id)
                if (existProductIndex === -1) {
                    draftState.items.push(action.payload)
                } else {
                    draftState.items[existProductIndex].quantity++;
                }
                break;
            case "cart/increase":
                draftState.items.find(item => item.id == action.payload).quantity++;
                break;
            case "cart/decrease":
                const product = draftState.items.find(item => item.id == action.payload);
                product.quantity--;
                if (product.quantity < 1) {

                    if (confirm("Bạn có chắc chắn muốn xóa không?")) {
                        draftState.items = draftState.items.filter(item => item.id !== product.id)
                    } else {
                        product.quantity = 1
                    }
                }
                break;
            default:
                state;
                break;
        }
    })
}
