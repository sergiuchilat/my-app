import React from "react";
import ReactButton from "./ReactButton";
import { Routes, Route, Link } from "react-router-dom";

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.buttons = [
            {
                id: 1,
                label: "Home",
                url: "",
            },
            {
                id: 5,
                label: "About us",
                url: "about",
            },
            {
                id: 6,
                label: "Contacts",
                url: "contacts",
            }
        ]
    }

    render() {
        return (
            <div>
                {this.buttons.map((button) => {
                    return (
                        <Link to={button.url} key={button.id}>
                            <ReactButton label={button.label}></ReactButton>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
export default NavBar