import React from "react";

function BootstrapButton(props) {
    let btnType = " btn-" + ((props.outline) ? "outline-" : "") + props.type;
    let btnSize = ((props.size) ? " btn-" + props.size : "");
    let btnBlock = ((props.block) ? " btn-block" : "");
    let btnClass = "btn" + btnType + btnSize + btnBlock;
    return (
        <button
            className={btnClass}
            onClick={props.fnClick}
        >
            {props.text}
        </button>
    )
}

export default BootstrapButton;