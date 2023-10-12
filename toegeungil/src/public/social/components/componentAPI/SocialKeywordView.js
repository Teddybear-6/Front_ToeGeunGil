import { useEffect, useState, useRef } from "react";
import SocialUser from "./SocialUser";
import "../css/Modal.css"
import DetailsStyle from '../css/SocialDetails.module.css';
import MainStyle from "../css/SocialMainCard.module.css"

function SocialKeywordView({ code }) {

    const [keyword, setkeyword] = useState({});

    useEffect(() => {
        fetch(process.env.REACT_APP_URL + `/keyword/${code.keywordCode}`)
            .then(response => response.json())
            .then(data => setkeyword(data));
    }, [code]);

    return (
        <>
            {/* 마우스 hover */}
            <div className={MainStyle.mainSocialKeys}>
                {keyword == null ? null : keyword.keywordName}
            </div>
        </>
    )
}

export default SocialKeywordView;