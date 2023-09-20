import { NavLink } from "react-router-dom";
import './ServiceNavbar.css';

function ServiceNavbar(){
    return(
        <>
        {/* 사용자 */}
        <div className="service-wraper">
        <NavLink to="/notice" className={({isActive})=> isActive?"serviceOn":"serviceOff"}>공지사항</NavLink>
        <NavLink to="/social" className={({isActive})=> isActive?"serviceOn":"serviceOff"}>문의하기</NavLink>

        {/* 관리자 */}
        {/* <NavLink to="/notice" className={({isActive})=> isActive?"serviceOn":"serviceOff"}>공지작성</NavLink>
        <NavLink to="/qna" className={({isActive})=> isActive?"serviceOn":"serviceOff"}>질문관리</NavLink>
        <NavLink to="/notice" className={({isActive})=> isActive?"serviceOn":"serviceOff"}>지역관리</NavLink>
        <NavLink to="/qna" className={({isActive})=> isActive?"serviceOn":"serviceOff"}>카테고리관리</NavLink> */}
        </div>
        </>
    )
}

export default ServiceNavbar;