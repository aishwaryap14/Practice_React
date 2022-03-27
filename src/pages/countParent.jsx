import React, { useEffect, useState } from "react";
import {withRouter} from 'react-router-dom'
import Child from './countChild'
import {useDispatch, useSelector } from 'react-redux'
import { increment } from '../action/action'
import store from '../index'

const Parent = () => {
    // console.log("in parent component: ", allReducer)
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const select = useSelector(state => state.count)
    console.log("in parent component: ", select)
    const increment = () => {
        store.dispatch(increment())
    }
    
    return(
        <>
        <div>
        <h1>Hello </h1>
            {/* <h2 onClick={increment}>{count}</h2> */}
            <div>{select}</div>
            <button onClick={increment} >Click</button>
            {/* <Child setCount = {setCount}></Child> */}
            
        </div>
        </>
    )
}

export default withRouter(Parent)