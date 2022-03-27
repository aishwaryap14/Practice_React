import React, { useState } from "react";
import {withRouter} from 'react-router-dom'
import Display from './display'
const Color = () => {

return(
    <>
    <Display userColor = "red" />
    </>
)
}

export default withRouter(Color)