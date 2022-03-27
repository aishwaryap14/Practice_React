import React from "react";
import {withRouter} from 'react-router-dom'
const Display = ({userColor}) => {

    return(
        <>
        <div>
            <h1 style={{color : userColor}}>Aishwarya Potdar</h1>
        </div>
        </>
    )

}

export default withRouter(Display)