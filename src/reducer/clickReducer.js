// import { increment, decrement } from "../action/action";
// import { INCREMENT , DECREMENT} from "../action/actionTypes";

const counter = (state = 0, action) => {
    console.log("click action in clickReducer: ", action.type)
    switch(action.type) {
        case "INCREMENT": return state + 1
        case "DECREMENT": return state - 1
        default: return state
        
    }
}

export default counter