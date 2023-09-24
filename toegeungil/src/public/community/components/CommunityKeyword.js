import { useState, useEffect } from "react";
import DetailsTitleStyle from './css/CommunityDetailsTitle.module.css';


function CommunityKeyword({ code }) {
    const [keyword, setKeyword] = useState({});

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/keyword/${code.keywordCode}`)
            .then((response) => response.json())
            .then((data) => setKeyword(data));
            console.log(keyword)
    }, [code]);

    return (
        <>
        <div className={DetailsTitleStyle.MainKeywordDiv}>
            {keyword.keywordName}
        </div>
        </>
    )
}

export default CommunityKeyword;
