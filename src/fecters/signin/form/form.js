import { useState } from "react";
import "./form.css"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

import { LOGIN_FORM_DATA } from "./config";



function Form(props) {

    const navigate = useNavigate();

    const { onLoginClick } = props

    const [loginForm, setLoginForm] = useState(LOGIN_FORM_DATA)


    const onInputChange = (e) => {
        const inputValue = e && e?.target?.value;
        const inputName = e && e?.target?.name;
        if (inputValue && inputName) {
            setLoginForm({ ...loginForm, [inputName]: inputValue })
        }
    }
    
    const onSubmitClick = () => {
        if (!loginForm.userId) {
            alert('user id is requred...')
        } else if (!loginForm.password) {
            alert('password is requred...')
        } else {
            onLoginClick(loginForm)
        }
    }

    const onForgotClick = () => {
        navigate("/forgot-password");
    }

    return (
        <>
            <div className="login-form p-4">
                <div className="d-flex justify-content-center align-items-center ">
                    <div className="  col-5 ">
                        <div className="border px-5 shadow-lg rounded-lg">
                            <div className=" p-3 text-center">
                                <h3 className="text-success profile-ts rounded-lg">LOGIN IN</h3>
                            </div>
                            <div>
                                <label className=" text-success"><h5>Email Id</h5></label>
                                <input className="col-12 text-success p-2 rounded border-success" name="userId" type="text" placeholder="Please enter the email" onChange={onInputChange}></input>
                            </div>
                            <div className="py-3">
                                <label className=" text-success"><h5> Password</h5></label>
                                <input className="col-12 text-success p-2 rounded border-success" type="password" name="password" placeholder="Please enter the password" onChange={onInputChange}></input>
                            </div>
                            <div><span onClick={onForgotClick}>Forgot Password</span></div>
                            <div className="col-12 d-flex justify-content-center py-3">
                                <button className="col-5 btn bg-success text-white" onClick={onSubmitClick}>Submit</button>
                            </div>
                            <div className=" col-12 signUp d-flex justify-content-center">
                                <p>Don't have an Account? Sign Up </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Form.propTypes = {
    onLoginClick: PropTypes.func
}

Form.defaultProps = {
    onLoginClick: () => { }
}

export default Form