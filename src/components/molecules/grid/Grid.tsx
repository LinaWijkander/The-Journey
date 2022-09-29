import React from 'react' 
import CSS from "csstype";


type GridProps = {
    spacing: number,
    direction: "row"|"column",
    wrap: boolean,
    numberOfChildren?: number,
    children?: React.ReactNode //JSX.Element|JSX.Element[];
}

const Grid = (props: GridProps): React.ReactElement => {    
const style: CSS.Properties = {
        display: "flex",
        gap: `${props.spacing * 0.25}rem`,
        flexWrap: props.wrap ? "wrap" : "nowrap",
        flexDirection: props.direction
    }

    return(
        <div style={style}> {props.children} </div>
    )
}

export default Grid;