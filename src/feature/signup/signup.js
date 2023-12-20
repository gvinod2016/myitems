import { signupAPI } from "./data"
import { errorToast, successToast } from "../../component/toast"
import Form from "./form"

import { useNavigate } from "react-router"

function Signup() {
    const navigate = useNavigate()
    const onSignupBtn = (signupForm) => {
        signupAPI(signupForm).then((res) => {
            const data = res && res?.data
            if (data?.status == 'success') {
                const results = data?.results
                console.log(results, 'results_signup')
                navigate("/sign-in")
                successToast('Account registered successfully')
            } else {
                errorToast('User account not created')
                console.log(data?.message, "message")
            }
        }).catch((err) => {
            console.log(err, 'err')
            errorToast('Try later some time')
        })
    }

    return (
        <>
            <Form onSignupBtn={onSignupBtn}></Form>
        </>
    )

}
export default Signup