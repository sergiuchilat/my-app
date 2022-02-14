import React from 'react';

export default function (props) {
    let [x, setX] = React.useState(props.x)
    let [y, setY] = React.useState(props.y)
    const [sum, setSum] = React.useState(props.x + props.y)

    const handleChangeX = (e) => {
        setX(e.target.value)
        setSum(Number(e.target.value) + Number(y))
    }

    const handleChangeY = (e) => {
        setY(e.target.value)
        setSum(Number(x) + Number(e.target.value))
    }

    return (
        <div>
            x <input type="number" value={x} onChange={handleChangeX} />
            +
            y <input type="number" value={y} onChange={handleChangeY} />
            =
            { sum }
            <hr/>
            { x } + { y } = { sum }
        </div>
    )
}