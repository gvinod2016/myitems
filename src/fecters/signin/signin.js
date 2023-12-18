import Form from "./form"

import { loginAPI } from "./data"

function Signin() {

    const onLoginClick = (loginForm) => {
        console.log('click..login', loginForm)
        loginAPI(loginForm).then((res) => {
            // console.log('res', res)
            const data = res && res?.data?.results
            if(data){
                console.log(data, 'data')
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