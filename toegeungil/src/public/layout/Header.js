import { NavLink } from "react-router-dom";
import "./layout.css"

function Header() {

    return (
        <>
            {/* 상단바(header) */}
            <div className="rightFlex">
                <NavLink to="/mypage" className={({isActive})=> isActive? "headerOn navbarLine":"headerFont navbarLine"}>마이페이지</NavLink>
                <NavLink to="/service" className={({isActive})=> isActive? "headerOn navbarLine":"headerFont navbarLine"}>고객센터</NavLink>
                <NavLink to="/login" className={({isActive})=> isActive? "headerOn navbarLine":"headerFont navbarLine"}>로그인</NavLink>
            </div>
        </>
    )
}

export default Header;