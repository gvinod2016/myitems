
import { Outlet } from "react-router-dom"
import Header from "../component/header"
import "./layout.css"
import Footer from "../component/footer"

export default function Layout() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}