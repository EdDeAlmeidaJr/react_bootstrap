import React from 'react';

export default class Select extends React.Component {

    handleChange = (ev) => {
        this.props.fnChange(ev.target.value);
    }

    render() {
        return (
            <select
                className="form-control"
                onChange={this.handleChange}
            >
                {this.props.options.map((item) => {
                    return (
                        <option key={item.cod} value={item.cod}>
                            {item.description}
                        </option>
                    )
                })}
            </select>
        )
    }
}