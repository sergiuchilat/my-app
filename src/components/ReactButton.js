import React from 'react';

class ReactButton extends React.Component{
    render(){
        return <button>{this.props.label}</button>
    }
}

export default ReactButton