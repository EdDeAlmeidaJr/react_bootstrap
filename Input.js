import React from 'react';

export default class BootstrapInput extends React.Component {

    handleChange = (ev) => {
        this.props.fnChange(ev.target.value);
    }
    render() {
        let inputSize = ((this.props.size) ? " form-control-" + this.props.size : "");
        let inputClass = "form-control" + inputSize;
        return(
            <input
                type={this.props.type}
                className={inputClass}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
            />
        )
    }
}
