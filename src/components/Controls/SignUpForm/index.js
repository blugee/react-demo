import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import SignupService from "../../../service/SignupService";
import TextInput from "../TextInputControl/index";
import CheckBox from "../CheckBoxControl/index";
import InputButton from "../ButtonControl/index";

const SignUpForm = ({tab}) => {

    const [data, setData] = useState({});
    const success = () => toast("Sign up successfully");
    const failed = () => toast("Registration failed");
    const [isValid, setIsValid] = useState("true");

    const handleText = (name, value, valid) => {
        setData({ ...data, [name]: value })
        setIsValid(valid)
    }

    const handleClick = async () => {
        
        let result;
        if(tab === "fan")
            result = await SignupService.SaveFanSignup(data);
        else
            result = await SignupService.SaveTalentSignup(data);

        if(result != null) {
            success();
        }else {
            failed();
        }
    }

    return (
        <div>
            <ToastContainer />
            <h2 className="headerText">Create Your {tab === "fan"? "Fan" : "Talent" } Account</h2>
            <div className="formcontainer">
                <TextInput
                    onChange={(e, isValid) => handleText(e.target.name, e.target.value, isValid)}
                    name='first_name'
                    regName={/^[a-zA-Z]+ [a-zA-Z]+$/}
                    type="text"
                    label='First Name *'
                    placeholder='First Name'
                />
                <TextInput
                    onChange={(e, isValid) => handleText(e.target.name, e.target.value, isValid)}
                    name='last_name'
                    type="text"
                    label='Last Name *'
                    placeholder='Last Name'
                />
                <TextInput
                    onChange={(e, isValid) => handleText(e.target.name, e.target.value, isValid)}
                    name='username'
                    type="text"
                    label='Username *'
                    placeholder='Username'
                />
                <TextInput
                    onChange={(e, isValid) => handleText(e.target.name, e.target.value, isValid)}
                    name='email'
                    type="email"
                    label='Email *'
                    placeholder='Email'
                />
                <TextInput
                    onChange={(e, isValid) => handleText(e.target.name, e.target.value, isValid)}
                    name='password'
                    type="password"
                    label='Password *'
                    placeholder='Password'
                />
                <CheckBox
                    value={true}
                    label={'I agree to the'}
                    labelOne={'Terms and Conditions'}
                />
                <InputButton
                    value='SIGN UP'
                    active={isValid}
                    onClick={handleClick} />
            </div>
        </div>
    )
}

export default SignUpForm;