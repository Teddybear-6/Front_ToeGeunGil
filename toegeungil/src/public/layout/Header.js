import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./layout.css"
import jwt_decode from "jwt-decode";


function Header({ login, setLogin }) {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
        }
    }, [login])

    const logout = () => {
        sessionStorage.removeItem("Authorizaton");
        setUser(null);
        setLogin(false);

    }

    const loginHandler = () => {
        alert("[MyPage] 로그인 후 이용 가능합니다.");
        window.location.href = "/login"
    }

    return (
        <>
            {/* 상단바(header) */}
            <div className="rightFlex">
                {!user ? null : (user?.auth[0] === "USER") ? null : <NavLink to="/tutor" className={({ isActive }) => isActive ? "headerOn navbarLine" : "headerFont navbarLine"}>강사</NavLink>}
                {!user ? <div className="headerFont navbarLine" onClick={loginHandler}>마이페이지</div>
                    : <NavLink to="/mypage" className={({ isActive }) => isActive ? "headerOn navbarLine" : "headerFont navbarLine"}>마이페이지</NavLink>}
                <NavLink to="/service" className={({ isActive }) => isActive ? "headerOn navbarLine" : "headerFont navbarLine"}>고객센터</NavLink>
                {user ? null : <NavLink to="/login" className={({ isActive }) => isActive ? "headerOn navbarLine" : "headerFont navbarLine"}>로그인</NavLink>}
                {/* <NavLink to="/notice/qna" className={({isActive}) => isActive? "headerOn navbarLine" :"headerFont navbarLine"}>Q&A</NavLink> */}
                {!user ? null : <NavLink to="/" type="button" className={"headerFont navbarLine"} onClick={logout}>로그아웃</NavLink>}

            </div>
        </>
    )
}

export default Header;