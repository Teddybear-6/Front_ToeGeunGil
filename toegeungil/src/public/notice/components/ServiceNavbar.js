import { NavLink } from "react-router-dom";
import './ServiceNavbar.css';
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

function ServiceNavbar() {
    const [user, setUser] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
    }, [])


    return (
        <>
            {/* 사용자 */}
            <div className="service-wrapper">
                <div className="ser-wrapper">
                <NavLink to="/service/notice" className={({ isActive }) => isActive || window.location.pathname == '/service' ? "serviceOn" : "serviceOff"}>공지사항</NavLink>
                <NavLink to="/service/qna" className={({ isActive }) => isActive ? "serviceOn" : "serviceOff"}>문의하기</NavLink>
                </div>
                {/* 관리자 */}
                {!user ? null : (user.auth[0] == 'ADMIN') ?
                    <div className="admin-wrapper">
                        <NavLink to="/service/local" className={({ isActive }) => isActive ? "serviceOn" : "serviceOff"}>지역관리</NavLink>
                        <NavLink to="/service/category" className={({ isActive }) => isActive ? "serviceOn" : "serviceOff"}>카테고리관리</NavLink>
                    </div>
                    : null}
            </div>
        </>
    )
}

export default ServiceNavbar;