
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'

import { errorToast, successToast } from '../../../component/toast'

import { FORGOT_FORM_DATA } from '../config'

import './form.css'

function Form(props) {

    const { onForgotClick } = props

    const navigate = useNavigate()

    const [forgotForm, setForgotForm] = useState(FORGOT_FORM_DATA)

    const onInputChange = (e) => {
        const inputValue = e && e?.target?.value
        const inputName = e && e?.target?.name
        if (inputValue && inputName) {
            setForgotForm({ ...forgotForm, [inputName]: inputValue })
        }
    }

    const onSubmitClick = () => {
        if (!forgotForm.phoneno) {
            console.log(forgotForm,"pppp")
            errorToast("Please enter a Phone Number")
        } else if (!forgotForm.phoneno.match("^[0-9]{10}$")) {
            errorToast('Please enter a valid Phone Number')
        } else {
            onForgotClick(forgotForm)
        }
    }
    const onCloseClick = () => {
        navigate('/sign-in')
    }
    return (
        <>
            <div className="Forgot-password-form pt-5">
                <div className="d-flex justify-content-center align-items-center ">
                    <div className="col-5 p-0 border shadow-lg rounded-lg">
                        <div className="pt-3 text-center">
                            <h3 className="text-success profile-ts rounded-lg m-0">Find Your Account</h3>
                        </div><hr />
                        <div className='px-4'>
                            <div>
                                <h6 className='mb-3'>Please enter your email address or mobile number to search for your account.</h6>
                                <input className="col-12 text-success p-2 rounded border-success" name="phoneno" type="text" placeholder="Email address or mobile number" onChange={onInputChange}></input>
                            </div>
                            <div>
                                <div className="d-flex justify-content-end py-3">
                                    <button className="col-3 btn border rounded-lg mr-3 bg-light" onClick={onCloseClick}>Close</button>
                                    <button className="col-3 btn bg-success text-white" onClick={onSubmitClick}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Form.PropType = {
    onForgotClick: PropTypes.func
}

Form.defaultProps = {
    onForgotClick: () => { }
}
export default Form