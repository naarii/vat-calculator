import React from "react";

const VATRateField = (props) => {
    return (
        <div className={props.customstyle}>{props.label}
            <select>
                <option value="0.2">20%</option>
                <option value="0.15">15%</option>
                <option value="0.125">12.5%</option>
                <option value="0">Exempt</option>
            </select>
        </div>
    );
}

export default VATRateField;