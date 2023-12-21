import { useState } from "react";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router"
import { errorToast } from "../../../component/toast";
import validator from 'validator'

import { SIGNUP_FORM_DATA } from "../config";

import "./form.css"


function Form(props) {
    const navigate = useNavigate()
    const { onSignupBtn } = props

    const [signupForm, setSignupForm] = useState(SIGNUP_FORM_DATA)

    const onLoginClick = () => {
        navigate("/sign-in")
    }

    const onInputChange = (e) => {
        const inputValue = e && e?.target?.value;
        const inputName = e && e?.target?.name;
        if (inputValue && inputName) {
            setSignupForm({ ...signupForm, [inputName]: inputValue })
        }
    }
    
    const onSignupclick = () => {
        if (signupForm) {
            if (!signupForm.fullname) {
                errorToast("Please enter a Full Name")
            } else if (!signupForm.phoneno) {
                errorToast("Please enter a Phone Number")
            } else if (!signupForm.phoneno.match("^[0-9]{10}$")) {
                errorToast('Please enter a valid Phone Number')
            } else if (!signupForm.email) {
                errorToast("Please enter a Email Id")
            } else if (!validator.isEmail(signupForm.email)) {
                errorToast("Please enter a valid Email Id")
            } else if (!signupForm.password) {
                errorToast("Please enter a Password")
            } else if (!validator.isStrongPassword(signupForm.password)) {
                errorToast("Please enter a minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 ")
            } else if (!signupForm.conformpass) {
                errorToast("Please enter a Confpassword")
            } else if (signupForm.password == signupForm.conformpass) {
                const { conformpass, ...rest } = signupForm
                onSignupBtn(rest)
            } else {
                errorToast("Conform password did not match")
            }
        } else {
            errorToast("Please fill the details")
        }
    }

    return (
        <>
            <div className="signup-form py-3">
                <div className=" d-flex justify-content-center align-items-center ">
                    <div className="col-4">
                        <div className="border px-4 shadow-lg rounded-lg">
                            <div className=" pt-3 text-center">
                                <h3 className="text-success profile-ts rounded-lg">SignUp</h3>
                            </div>
                            <div className="text-center">
                                <h4>Already have an account?<span onClick={onLoginClick}>Login</span></h4>
                            </div>

                            <div>
                                <label className=" text-success"><h5>Full Name</h5></label>
                                <input className="col-12 text-success p-1 rounded border-success" type="text" placeholder="Full Name" name="fullname" onChange={onInputChange}></input>
                            </div>
                            <div className="py-3">
                                <label className=" text-success"><h5>Phone No</h5></label>
                                <input className="col-12 text-success p-1 rounded border-success" type="number" placeholder=" Phone No" name="phoneno" onChange={onInputChange}></input>
                            </div>
                            <div>
                                <label className=" text-success"><h5>Email</h5></label>
                                <input className="col-12 text-success p-1 rounded border-success" type="text" placeholder="Email" name="email" onChange={onInputChange}></input>
                            </div>
                            <div className="py-3">
                                <label className=" text-success"><h5>Password</h5></label>
                                <input className="col-12 text-success p-1 rounded border-success" type="password" placeholder="password" name="password" onChange={onInputChange}></input>
                            </div>
                            <div>
                                <label className=" text-success"><h5>conform Password</h5></label>
                                <input className="col-12 text-success p-1 rounded border-success" type="password" placeholder="Conform password" name="conformpass" onChange={onInputChange}></input>
                            </div>
                            <div className="col-12 d-flex justify-content-center py-3">
                                <button className="col-5 btn bg-success text-white" onClick={onSignupclick}>SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

Form.PropType = {
    onSignupBtn: PropTypes.func
}

Form.defaultProps = {
    onSignupBtn: () => { }
}

export default Form