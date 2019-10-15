import React from 'react';

function BootstrapInput(props) {
    let inputSize = ((props.size) ? " form-control-" + props.size : "");
    let inputClass = "form-control" + inputSize;
    return(
        <input
            type={props.type}
            className={inputClass}
            placeholder={props.placeholder}
            onChange={props.fnChange}
        />
    )
}

export default BootstrapInput;