import { IMAGES } from "./config"


import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <>
            <div className="sec-header">
                <nav className="container px-4 navbar justify-content-between navbar-expand-lg navbar-light">
                    <Link className="navbar-brand text-dark" to="#">LOGO</Link>
                    <form className=" col-5  bg-light text-dark p-0">
                        <div className="row align-items-center m-0">
                            <div className="col-1 p-0">
                                <div className="row m-0  justify-content-center"> 
                                    <img width="20px" src={IMAGES}></img>
                                </div>
                            </div>
                            <div className="col-11 p-0">
                                <input type="search" placeholder="Search" aria-label="Search" />
                            </div>
                        </div>

                    </form>
                    <div className="col-2 p-0" id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-between">
                            <li className="nav-item active">
                                <Link className="nav-link text-dark" to="#">Login</Link>
                            </li>
                            <button className="btn  my-2 my-sm-0 text-white border-0" type="submit">Cart</button>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}