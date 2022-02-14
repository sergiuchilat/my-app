import React from "react";

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            phone: ""
        }
    }

    handleNameTextChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handlePhoneTextChange = (e) => {
        this.setState({ phone: e.target.value });
    }

    render() {

        return (
            <div>
                CONTACTS page
                <div>
                    Name <input type="text" value={this.state.name} onChange={this.handleNameTextChange} /> <br />
                    Phone <input type="text" value={this.state.phone} onChange={this.handlePhoneTextChange} /> <br />
                </div>
                <div>
                    {this.state.name}, {this.state.phone}
                </div>
            </div>
        )
    }
}