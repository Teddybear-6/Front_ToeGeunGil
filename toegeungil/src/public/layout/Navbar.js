import { NavLink } from "react-router-dom";
import "./layout.css"

function Navbar() {

    return (
        <>
            <div className="navbarLayout navbarFlex">
                {/* 퇴근길 로고 */}
                <NavLink to="/">
                    <img className="logo" src="/logo.png" />
                </NavLink>
                {/* Navbar */}
                <div className="navbarFlex mar50">
                    <NavLink to="/hobby" className={({isActive})=> isActive? "navbarOn navbarLine":"navbarFont navbarLine"}>Hobby</NavLink>
                    <NavLink to="/social" className={({isActive})=> isActive? "navbarOn navbarLine":"navbarFont navbarLine"}>Social</NavLink>
                    <NavLink to="/community" className={({isActive})=> isActive? "navbarOn navbarLine":"navbarFont navbarLine"}>Community</NavLink>
                </div>
                {/* 검생창 */}
                <div className="searchBar searchFlex">
                    <input className="searchBox" type="text" />
                    <img className="searchicon" src="/search.png" type="submit" />
                </div>
            </div>
        </>
    )
}

export default Navbar;