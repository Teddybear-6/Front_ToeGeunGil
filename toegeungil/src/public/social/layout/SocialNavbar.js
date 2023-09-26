import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import "../components/css/SocialNavbar.css"


function SocialNavbar() {
    
    const [cagegory, setCategory] = useState();

    useEffect(() => {
        //카테고리코드
        fetch(process.env.REACT_APP_URL + `/category`).then(res => res.json()).then(res => setCategory(res));
    }, [])


    return (
        <>
            {/* 카테고리 Navbar */}
            <div className="cateNav">
                <div className="cateNavText">
                <NavLink to={"/social"} className={({ isActive }) => isActive ? "cateNavOn" : "cateNavOff"}>전체</NavLink>
                {
                    cagegory?.map((m, index) => (
                        <NavLink state={m.categoryCode} to={`socialcategory/${m.categoryCode}`} key={index} className={({ isActive }) => isActive ? "cateNavOn" : "cateNavOff"}>{m.categoryName}</NavLink>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default SocialNavbar;