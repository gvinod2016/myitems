import { useNavigate } from 'react-router'

import Form from './form'
import { errorToast } from '../../component/toast'
import { forgotAPI } from './data'

import './forgot-password.css'

function Forgotpassword() {

    const navigate = useNavigate()
    const onForgotClick = (forgotForm) => {
        // console.log(forgotForm, "forgotForm-data")
        forgotAPI(forgotForm).then((res) => {
            // console.log('res', res)
            const data = res && res?.data
            if (data?.status == 'success') {
                const results = data?.results
                navigate('/sign-in')
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