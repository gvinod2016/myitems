import { useNavigate } from 'react-router'

import Form from './form'
import { errorToast, successToast } from '../../component/toast'
import { forgotAPI } from './data'

import './forgot-password.css'

function Forgotpassword() {

    const navigate = useNavigate()
    const onForgotClick = (forgotForm) => {
        forgotAPI(forgotForm).then((res) => {
            const data = res && res?.data
            if (data?.status == 'success') {
                const results = data?.results
                navigate('/sign-in')
                successToast('OTP sent to Your Mobile Number')
            } else {
                errorToast('User account not created')
                console.log(data?.message)
            }
        }).catch((err) => {
            errorToast('Try later some time')
            console.log(err, 'err')
        })
    }

    return (
        <>
            <Form onForgotClick={onForgotClick}></Form>
        </>
    )
}

export default Forgotpassword