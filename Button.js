import React from "react";

function BootstrapButton(props) {
    let btnType = " btn-" + ((props.outline) ? "outline-" : "") + props.type;
    let btnSize = ((props.size) ? " btn-" + props.size : "");
    let btnBlock = ((props.isBlock) ? " btn-block" : "");
    let btnClass = "btn" + btnType + btnSize + btnBlock;
    let marginR = props.marginRight + 'px';
    return (
        <button
            className={btnClass}
            onClick={props.fnClick}
            disabled={props.disabled}
            style={{marginRight: marginR}}
        >
            {props.text}
        </button>
    )
}

export default BootstrapButton;