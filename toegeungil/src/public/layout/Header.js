import { NavLink } from "react-router-dom";
import { useEffect ,useState } from "react";
import "./layout.css"
import jwt_decode from "jwt-decode";


function Header() {
    const [user,setUser]= useState();
    useEffect(()=>{
        if (sessionStorage.getItem("Authorizaton")) {
            setUser(jwt_decode(sessionStorage.getItem("Authorizaton")))
           
          }
    })


    return (
        <>
            {/* 상단바(header) */}
            <div className="rightFlex">
               {   !user ? null : (!user?.auth[0]==="TUTOR" ||!user?.auth[0]==="ADMIN") ? null :   <NavLink to="/tutor" className={({isActive})=> isActive? "headerOn navbarLine":"headerFont navbarLine"}>강사</NavLink> }
                <NavLink to="/mypage" className={({isActive})=> isActive? "headerOn navbarLine":"headerFont navbarLine"}>마이페이지</NavLink>
                <NavLink to="/service" className={({isActive})=> isActive? "headerOn navbarLine":"headerFont navbarLine"}>고객센터</NavLink>
                <NavLink to="/login" className={({isActive})=> isActive? "headerOn navbarLine":"headerFont navbarLine"}>로그인</NavLink>
                {/* <NavLink to="/notice/qna" className={({isActive}) => isActive? "headerOn navbarLine" :"headerFont navbarLine"}>Q&A</NavLink> */}
            
            </div>
        </>
    )
}

export default Header;