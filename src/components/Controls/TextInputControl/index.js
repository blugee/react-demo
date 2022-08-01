import React, { useState } from "react";
import './index.css'

export const text = new RegExp(
    '^[a-zA-Z]+$', 'g'
);

export const email = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$', 'g'
);

export const password = new RegExp(
    '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$', 'g'
);

const TextInput = ({ type, label, placeholder, name, value, defaultValue, onChange }) => {

    const [isError, setIsError] = useState(false);

    const handleChange = async (e) => {
        
        if(type === "text" && !text.test(e.target.value)) 
            setIsError(true);
        else if(type === "email" && !email.test(e.target.value)) 
            setIsError(true);
        else if(type === "password" && !password.test(e.target.value)) 
            setIsError(true);
        else {
            setIsError(false)
            onChange(e, false)
        }
        
    }

    return (
        <div className="text-input-container">
            <label className="text-label">{label}</label>
            <input
                className="text-input"
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(e) => handleChange(e)}
                defaultValue={defaultValue}
            />
            {isError ? 
                <label className="error-label">This has an error</label> : ''
            }
        </div>
    )
}

export default TextInput;