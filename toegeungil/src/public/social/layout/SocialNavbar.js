import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';


function SocialNavbar() {
    
    const [cagegory, setCategory] = useState();

    useEffect(() => {
        //카테고리코드
        fetch(process.env.REACT_APP_URL + `/category`).then(res => res.json()).then(res => setCategory(res));
    }, [])


    return (
        <>
            {/* 카테고리 Navbar */}
            <div className="tutorNavwraper">
                <NavLink to={"/social"} className={({ isActive }) => isActive ? "serviceOn" : "serviceOff"}>전체</NavLink>
                {
                    cagegory?.map((m, index) => (
                        <NavLink state={m.categoryCode} to={`social/socialcategory/${m.categoryCode}`} key={index} className={({ isActive }) => isActive ? "serviceOn" : "serviceOff"}>{m.categoryName}</NavLink>
                    ))
                }
            </div>
        </>
    )
}

export default SocialNavbar;