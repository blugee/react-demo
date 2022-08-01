import React from "react";
import './index.css'

const InputButton = ({ value, onClick, active }) => {
    return (
        <div className="button-input-container">
            <input
                className="btn btn-success"
                type='button'
                value={value}
                disabled={active}
                onClick={onClick}
            />
        </div>
    )
}

export default InputButton;