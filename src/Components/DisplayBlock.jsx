import React from "react";

const DisplayBlock = (props) => {
    return (
        <div className={props.customstyle}>{props.label} {(props.value.toFixed(2))}</div>
        );
}

export default DisplayBlock;