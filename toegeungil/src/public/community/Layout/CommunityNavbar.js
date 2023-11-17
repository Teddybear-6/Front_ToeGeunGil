import { useEffect, useState } from "react";
import '../components/css/CommunityNavbar.css'
import { NavLink } from "react-router-dom";

function CommunityNavbar({ localfilters, setLocalFilters }) {
    const [category, setCategory] = useState();
    const [local, setLocal] = useState();

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/category`)
            .then(response => response.json())
            .then(response => setCategory(response));


        fetch(process.env.REACT_APP_URL + `/local`)
            .then(response => response.json())
            .then(response => setLocal(response));

        setLocalFilters(null)
    }, [])

    const onChangeHandler = (e) => {
        setLocalFilters(e.target.value)
    };

    return (
        <>
            <div className="localSty">
                <div htmlFor="local" className="localName">지역</div>
                <div className="localBar">
                    <select
                        defaultValue="0"
                        name="localCode"
                        id="local"
                        className="localBarText"
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

            <div className="categorySty">
                <div className="categoryName">
                    <NavLink to={"/communitys"} className={({ isActive }) => isActive ? "categoryOn" : "categoryOff"}>전체</NavLink>
                    {
                        category?.map((m,index) => (
                            <NavLink state={m.categoryCode} to={`communityCategory/${m.categoryCode}`} key={index} className={({isActive}) => isActive ? "categoryOn" : "categoryOff"}>{m.categoryName}</NavLink>
                        ))
                    }
                </div>
            </div>
        </>
    )

}
export default CommunityNavbar;

