import "./layout.css"
import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {

    return(
        <>
            <div className="w1650h388">
                <div className="w1650h50" />
                <Header/>
                <Navbar/>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;