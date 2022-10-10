import React, { useEffect } from "react";

const VATRateField = (props) => {
    const { updatePrices } = props;

    useEffect(() => {
        updatePrices();
    }, [props.value, updatePrices]);
    return (
        <div className={props.customstyle}>{props.label}
            <select value={props.value} onChange={(event) => props.vatRateChanged(+event.target.value)}>
                <option value="0.2">20%</option>
                <option value="0.15">15%</option>
                <option value="0.125">12.5%</option>
                <option value="0">Exempt</option>
            </select>
        </div>
    );
}

export default VATRateField;