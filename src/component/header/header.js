

import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link className="nav-link " to="/home">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link " to="/about">About</Link>
                </li>
            </ul>
        </>
    )
}