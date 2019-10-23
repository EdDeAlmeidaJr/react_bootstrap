import React from 'react';

export default class Select extends React.Component {
    render() {
        return (
            <select className="form-control" style={{ width: "100%" }} onChange={this.props.fnchange}>
                {this.props.options.map((item) => {
                    return (
                        <option key={item.cod} value={item.cod}>
                            {item.descricao}
                        </option>
                    )
                })}
            </select>
        )
    }
}