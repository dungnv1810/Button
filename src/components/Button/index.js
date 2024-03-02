import React from "react";
import PropTypes from "prop-types"
import {InputWrapper} from "./style"
const Button = (props) =>{
    const {onClick, name, type} = props;
    return(
        <InputWrapper
            onClick={onClick}
            type={type}
        >
            {name}
        </InputWrapper>
    )
}

Button.prototype = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOfType(['nomal, primary']).isRequired
}
export default Button;