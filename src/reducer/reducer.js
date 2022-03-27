import {combineReducers} from "redux"
import ClickReducer from "./clickReducer"

const allReducer = combineReducers({
    counter: ClickReducer
})

export default allReducer