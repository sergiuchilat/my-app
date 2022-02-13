import React from "react";
import ReactButton from "./ReactButton";

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.buttons = [
            {
                id: 1,
                label: "Home",
            },
            {
                id: 2,
                label: "Blog",
            },
            {
                id: 3,
                label: "Photos",
            },
            {
                id: 4,
                label: "Video",
            },
            {
                id: 5,
                label: "About us",
            },
            {
                id: 6,
                label: "Contacts",
            }
        ]
    }

    render(){
        return (
            <div>
                {this.buttons.map((button) => {
                    return <ReactButton key={button.id} label={button.label}></ReactButton>
                })}
            </div>
        )
    }
}
export default NavBar