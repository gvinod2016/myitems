import Form from "./form"
import { loginAPI } from "./data"
import { errorToast, successToast } from "../../component/toast"


import "./signin.css"

function Signin() {

    const onLoginClick = (loginForm) => {
        loginAPI(loginForm).then((res) => {
            // console.log('res', res)
            const data = res && res?.data
            if (data?.status == 'success') {
                const results = data?.results
                successToast('success')
                console.log(results, 'results_signin')
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
            <Form onLoginClick={onLoginClick}></Form>
        </>
    )
}
export default Signin