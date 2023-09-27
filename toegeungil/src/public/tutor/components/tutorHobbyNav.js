import { NavLink } from "react-router-dom";
import  "./tutorNav.css"

function TutorNavber(){


    return(
        <>
        {/* 사용자 */}

        <div className="tutorNavwraper">
        <NavLink to={"/tutor"}  className={({isActive})=> isActive?"serviceOn":"serviceOff"}>취미 관리</NavLink>
        <NavLink to={"/hobbywrite"} className={({isActive})=> isActive ? "serviceOn":"serviceOff"}>취미 작성</NavLink>
        </div>    
        </>
    )
}

export default TutorNavber;