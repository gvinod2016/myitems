import { Link } from "react-router-dom"
import "./form.css"
function  From(){
    return(
        <>
         <div className="Proflie-lg pt-3">
                <div className=" d-flex justify-content-center align-items-center ">
                    <div className="col-4">
                        <div className="border px-4 shadow-lg rounded-lg">
                            <div className=" pt-3 text-center">
                                <h3 className="text-success profile-ts rounded-lg">SignUp</h3>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="logout-font-sw ">Already have an account?<link></link></div>
                                <Link to="/signin">Login</Link>
                            </div>

                            <div>
                                <label className=" text-success"><h5>Full Name</h5></label>
                                <input className="col-12 text-success p-1 rounded border-success" type="text" placeholder="Full Name"></input>
                            </div>
                            <div className="py-3">
                                <label className=" text-success"><h5>Phone No</h5></label>
                                <input className="col-12 text-success p-1 rounded border-success" type="number" placeholder=" Phone No"></input>
                            </div>
                            <div>
                                <label className=" text-success"><h5>Email</h5></label>
                                <input className="col-12 text-success p-1 rounded border-success" type="text" placeholder="Email"></input>
                            </div>
                            <div className="py-3">
                                <label className=" text-success"><h5>Password</h5></label>
                                <input className="col-12 text-success p-1 rounded border-success" type="password" placeholder=" password"></input>
                            </div>
                            <div>
                                <label className=" text-success"><h5>conform Password</h5></label>
                                <input className="col-12 text-success p-1 rounded border-success" type="password" placeholder="Conform password"></input>
                            </div>
                            <div className="col-12 d-flex justify-content-center py-3">
                                <button className="col-5 btn   bg-success text-white">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default From