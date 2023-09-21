import { NavLink , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import "./layout.css"
import jwt_decode from "jwt-decode";


function Header() {
    const [user, setUser] = useState();
    const navigate =useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))

        }

        console.log("확인")
    },[])

    const logout = () => {
        sessionStorage.removeItem("Authorizaton");
        console.log("확인")
        console.log(user)
        setUser(null);
        navigate("/");
    }

    return (
        <>
            {/* 상단바(header) */}
            <div className="rightFlex">
                {!user ? null : (!user?.auth[0] === "TUTOR" || !user?.auth[0] === "ADMIN") ? null : <NavLink to="/tutor" className={({ isActive }) => isActive ? "headerOn navbarLine" : "headerFont navbarLine"}>강사</NavLink>}
                <NavLink to="/mypage" className={({ isActive }) => isActive ? "headerOn navbarLine" : "headerFont navbarLine"}>마이페이지</NavLink>
                <NavLink to="/service" className={({ isActive }) => isActive ? "headerOn navbarLine" : "headerFont navbarLine"}>고객센터</NavLink>
                {user ? null : <NavLink to="/login" className={({ isActive }) => isActive ? "headerOn navbarLine" : "headerFont navbarLine"}>로그인</NavLink>}
                {/* <NavLink to="/notice/qna" className={({isActive}) => isActive? "headerOn navbarLine" :"headerFont navbarLine"}>Q&A</NavLink> */}
                {!user ? null : <button onClick={logout}>로그아웃</button> }

            </div>
        </>
    )
}

export default Header;