import { NavLink, matchPath, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./layout.css"

function Navbar() {
    //경로 비교
    const categoryCode = useLocation().state; //카테고리 코드 가져오기
    const location = useLocation(); //해당 페이지 path 가져오기
    // console.log("userLocation(): ", location.pathname)
    // console.log("useLocation().state : ", `/socialcategory/${categoryCode}`)
    // console.log("DSfdsfsf", location.pathname == `/socialcategory/${categoryCode}`)

    const navigate = useNavigate();
    const [hobbyTitle, setHobbyTitle] = useState();
    const [socialName, setSocialName] = useState();

    const handleClick = (e) => (
        // navigate('/hobby/search', { state: hobbyTitle })
        navigate('/search', {state: socialName, hobbyTitle})
    )

    const onChangeHandler = (e) => (
        setHobbyTitle(e.target.value),
        setSocialName(e.target.value)
    )

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            handleClick(e)// Enter 입력이 되면 클릭 이벤트 실행
        }
    };

    console.log(categoryCode)
    return (
        <>
            <div className="navbarLayout navbarFlex">
                {/* 퇴근길 로고 */}
                <NavLink to="/">
                    <img className="logo" src="/logo.png" />
                </NavLink>
                {/* Navbar */}
                <div className="navbarFlex mar50">
                    <NavLink to="/hobby" className={({ isActive }) => isActive ? "navbarOn navbarLine" : (location.pathname == `/hobbycategory/${categoryCode}`) ? "navbarOn navbarLine" : "navbarFont navbarLine"}>hobby</NavLink>
                    <NavLink to="/social" className={({ isActive }) => isActive ? "navbarOn navbarLine" : (location.pathname == `/socialcategory/${categoryCode}`) ? "navbarOn navbarLine" : "navbarFont navbarLine"}>Social</NavLink>
                    <NavLink to="/communitys" className={({ isActive }) => isActive ? "navbarOn navbarLine" : "navbarFont navbarLine"}>Community</NavLink>
                </div>
                {/* 검색창 */}
                <div className="searchBar searchFlex">
                    <input className="searchBox" type="text" onChange={(e) => onChangeHandler(e)} onKeyPress={handleOnKeyPress} />
                    <img className="searchicon" src="/search.png" type="submit" onClick={handleClick} />
                </div>
            </div>
        </>
    )
}

export default Navbar;