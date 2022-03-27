import React, { useState } from "react";
import {withRouter} from 'react-router-dom'
import {useDispatch } from 'react-redux'
import { increment } from '../action/action'
import store from '../store/store'
const Child = ({setCount}) => {
    var count = 0
    const dispatch = useDispatch();
    return(
        <>
        <div>
            <button onClick={() => store.dispatch(increment())}>increment </button>
            {/* <button onClick={() => setCount(2)}>2 </button>
            <button onClick={() => setCount(3)}>3 </button>
            <button onClick={() => setCount(4)}>4 </button> */}
        </div>
        </>
    )
}

export default withRouter(Child)