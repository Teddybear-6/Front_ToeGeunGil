import "./layout.css"
import { useEffect } from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout({login ,setLogin}) {
    useEffect(()=>{

    },[login,setLogin])
    return(
        <>
            <div className="w1650h388">
                <div className="w1650h50" />
                <Header login={login} setLogin={setLogin}/>
                <Navbar/>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;