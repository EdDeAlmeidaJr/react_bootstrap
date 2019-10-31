import React from "react";



export default class BootstrapTextArea extends React.Component {

    handleChange = (ev) => {
        this.props.fnChange(ev.target.value);
    }

    render() {
        return (
            <textarea
                className="form-control"
                lines={this.props.lines}
                onChange={this.handleChange}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
            ></textarea>
        )
    }

}