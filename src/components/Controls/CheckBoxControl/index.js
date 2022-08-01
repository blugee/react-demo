import React from "react";
import './index.css'

const CheckBox = ({ label, labelOne, value }) => {
    return (
        <div className="checkbox-input-container">
            <input
                id="agree"
                className="checkbox-input geekmark"
                type='checkbox'
                value={value}
            />
            <div className="label">
                <label htmlFor={"agree"}>{label}</label>
                <label htmlFor={"agree"} className="labelOne">{labelOne}</label>
            </div>
        </div>
    )
}

export default CheckBox;