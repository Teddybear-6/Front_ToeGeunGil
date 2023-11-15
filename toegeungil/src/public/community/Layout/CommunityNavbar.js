import { useEffect, useState } from "react";
import '../components/css/CommunityNavbar.css'

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
        </>
    )

}
export default CommunityNavbar;

