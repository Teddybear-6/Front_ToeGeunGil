import { NavLink } from "react-router-dom";
import "./layout.css"

function Header() {

    return (
        <>
            {/* 상단바(header) */}
            <div className="rightFlex">
                <div className="headerFont navbarLine">마이페이지</div>
                <NavLink to="/notice"className="headerFont navbarLine">고객센터</NavLink>
                <NavLink to="/login" className="headerFont navbarLine">로그인</NavLink>
            </div>
        </>
    )
}

export default Header;