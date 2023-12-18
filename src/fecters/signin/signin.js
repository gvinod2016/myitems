import Form from "./form"

import { loginAPI } from "./data"

function Signin() {

    const onLoginClick = (loginForm) => {
        console.log('click..login', loginForm)
        loginAPI(loginForm).then((res) => {
            // console.log('res', res)
            const data = res && res?.data
            if (data?.status == 'success') {
                const results = data?.results
                console.log(results, 'results')
            } else {
                console.log(data?.message)
            }
        }).catch((err) => {
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