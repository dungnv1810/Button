import React from "react";
import PropTepes from "prop-types";
import { InpurWrapper } from "./style";
const Input = (props) =>{
    const {
        name, 
        value, 
        onChange, 
        placeholder, 
        type,
        autoComplete,
        width,
        } = props;
    return(
        <React.Fragment>
            <InpurWrapper
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete={autoComplete}
                width={width}
            />
        </React.Fragment>
    )
}

Input.prototype = {
    type: PropTepes.string.isRequired,
    name: PropTepes.string.isRequired,
    value: PropTepes.string.isRequired,
    onChange: PropTepes.func.isRequired,
    placeholder: PropTepes.string.isRequired,
    width: PropTepes.number.isRequired,
}

 export default Input;

