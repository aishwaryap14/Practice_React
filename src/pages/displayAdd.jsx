import React, { useState } from "react";
import { withRouter } from 'react-router-dom'
// import './displayAdd.scss'
const Add = () => {
    const [stage, setStage] = useState("Hiii EveryOne")
    const [count, setCount] = useState(9)
    const handlehi = () => {
        setStage("Hiii EveryOne")
        setCount(9)
    }
    const handlehello = () => {
        setStage("Hello EveryOne")
        setCount(110)
    }
    return (
        <div style={{display: "flex"}}>
            <div className="add_a">
            <h1>hi</h1>
            <button onClick={handlehi}>hi button</button>
            </div>
            <div className="add_b">
            <h1>hello</h1>
            <button onClick={handlehello}>hello button</button>
            </div>
            <div><h1>{stage}</h1></div>
            <div><h2>Total Number of People {count}</h2></div>
        </div>
    )
}

export default withRouter(Add)