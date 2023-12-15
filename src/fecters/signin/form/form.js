import "./form.css"
import { Link } from "react-router-dom"
function Form() {
    return (
        <>
            <div className="Proflie-lg">
                <div className=" col-12  profile-height d-flex justify-content-center align-items-center ">
                    <div className="  col-5 ">
                        <div className="border  shadow-lg rounded-lg">
                            <div className=" p-3 text-center">
                                <h3 className="text-success profile-ts rounded-lg">LOGIN</h3>
                            </div>
                            <div className="p-3">
                                <label className=" text-success"><h5>Email</h5></label>
                                <input className="col-11 text-success p-1 rounded border-success" type="text" placeholder="Please enter the email"></input>
                            </div>
                            <div className="p-3">
                                <label className=" text-success"><h5>Password</h5></label>
                            </div>
                            <div className="p-3">
                                <label className=" text-success" type="checkbox"><h5>Remember me</h5></label>
                                <input className="col-11 text-success p-1 rounded border-success" type="text" placeholder="Please enter the password"></input>
                            </div>
                            <div className="col-12 d-flex justify-content-center py-3">
                                <button className="col-5 btn   bg-success text-white">Submit</button>

                            </div>
                            <div className=" col-12 signUp d-flex justify-content-center">
                                <p>Don't have  an Account?<Link to="/signup">Signup</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
export default Form