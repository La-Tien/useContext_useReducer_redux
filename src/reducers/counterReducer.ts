import { produce } from "immer";


const initialState = {
    count: 0,
}
export const counterReducer = (state = initialState, action: any) => {
    console.log("action", action);
    return produce(state, drafState => {
        switch (action.type) {
            case "INCREMENT":
                drafState.count++;
                // return {
                //     count: state.count + 1
                // }
                break;
            case "DECREMENT":
                drafState.count--;
                // return {
                //     count: state.count - 1
                // }
                break;
            case "INCREASE":
                drafState.count += action.payload
                // return {
                //     count: state.count + action.payload
                // }
                break;
            default:
                state;
                break;
        }
    })
}