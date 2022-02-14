import React from "react";
import Calculator from "../components/Calculator";

export default class extends React.Component{
    render(){
        return(
            <div>
                HOME page
                <hr/>
                <Calculator x={1} y = {2}/>
            </div>
        )
    }
}