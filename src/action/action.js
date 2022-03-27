import { INCREMENT, DECREMENT } from "./actionTypes";

export const increment = (res) => {
console.log("clickBtn", res)
return {
    type: INCREMENT,
    data: res
}
}

export const decrement = (res) => {
    console.log("clickBtn", res)
    return {
        type: DECREMENT,
        data: res
    }
    }