import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import "../components/css/SocialNavbar.css"


function SocialNavbar({ localfilters, setLocalFilters }) {

    const [cagegory, setCategory] = useState();
    const [local, setLocal] = useState();

    useEffect(() => {
        //카테고리코드
        fetch(process.env.REACT_APP_URL + `/category`)
            .then(res => res.json())
            .then(res => setCategory(res));

        //지역코드
        fetch(process.env.REACT_APP_URL + `/local`)
            .then(res => res.json())
            .then(res => setLocal(res));
    }, [])

    const onChangeHandler = (e) => {
        setLocalFilters(e.target.value)
    };


    return (
        <>
            {/* 지역 Navbar */}
            <div className="hobbyNavlocalframe">
                <label className="hobbylocalLable" htmlFor="local">지역</label>
                <div className="hobbyNavlocal">
                    <select
                        defaultValue="0"
                        name="localCode"
                        id="local"
                        className="nabertextAll"
                        onChange={onChangeHandler}>
                        <option value="0">전체</option>
                        {local?.map((m, index) => (
                            <option value={m.localCode} key={m.localCode}>
                                {m.localName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

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