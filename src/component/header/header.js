import { IMAGES } from "./config"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import "./header.css"
import { useState } from "react"
import { searchBtn } from "../../store/countReducer"

export default function Header() {
    const [searchVal, setSearchVal] = useState(" ")
    const dispatch = useDispatch()
    const countVal = useSelector(state => {
        console.log(state.cart.totalCount, 'state')
        return state.cart.totalCount
    })
    // const searchData = useSelector(state => {
    //     console.log(state.rootReducers.cart.totalCount, 'state1')
    //     return state.rootReducers.cart.totalCount
    // })
    const onchangeData = (e) => {
        const val = e && e?.target.value
        console.log(val, "val..")
        setSearchVal(val)
    }
    const onclickData = () => {
        console.log(searchVal,"searchVal...")
        dispatch(searchBtn(searchVal))

        // const filterData = searchVal.filter((row) => {
        // if (row.name.toLowerCase().includes(searchData.toLowerCase())) {
        //     console.log(row, "row")
        //     return row
        // }
        // })
    }
    return (
        <>
            <div className="sec-header">
                <nav className="container px-4 navbar justify-content-between navbar-expand-lg navbar-light">
                    <Link className="navbar-brand text-dark" to="/home">LOGO</Link>
                    <div className="col-6 p-0">
                        <div className="row justify-content-between align-items-center m-0">
                            <div className="col-9 bg-light text-dark p-0">
                                <div className="row align-items-center m-0">
                                    <div className="col-1 p-0">
                                        <div className="row m-0  justify-content-center">
                                            <img width="20px" src={IMAGES}></img>
                                        </div>
                                    </div>
                                    <div className="p-0 col-11">
                                        <input type="search" placeholder="Search" aria-label="Search" onChange={onchangeData} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 p-0">
                                <button className="px-3 py-2 my-sm-0 bg- border-0" onClick={onclickData} type="submit">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 p-0" id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-between">
                            <li className="nav-item active row m-0">
                                <Link className="nav-link text-dark" to="signin">Signin</Link>
                                <div className="selet nav-link text-dark"> Services</div>
                                <div className="option">
                                    <div>
                                        <Link to="#">services1</Link>
                                    </div>
                                    <div>
                                        <Link to="#">services1</Link>
                                    </div>
                                    <div>
                                        <Link to="#">services1</Link>
                                    </div>
                                </div>
                            </li>

                            <div className="col-4 bg-success p-0 rounded">
                                <div className="d-flex h-100 text-center align-items-center px-2 text-white " type="submit">
                                    <div className="col-8 p-0">
                                        Cart
                                    </div>
                                    <div className="col-4 p-0">{countVal}</div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}