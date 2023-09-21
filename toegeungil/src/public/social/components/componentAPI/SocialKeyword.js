import { useEffect, useState } from "react";


import MainStyle from '../css/SocialMainCard.module.css';

function SocialKeyword({code}){
    const [keyword, setkeyword] = useState({});

    useEffect(() => {
        console.log()
        fetch(process.env.REACT_APP_URL+`/keyword/${code.keywordCode}`)
            .then(response => response.json())
            .then(data => setkeyword(data));
            console.log(keyword)
    },[code]);

    console.log(keyword)
    return (
        <>
            <div className={MainStyle.socialMainKeywordDiv}>
                {/* {code == 0? '존재하지 않은 키워드' : keyword == null? null:keyword.keywordName} */}
                {keyword == null? null:keyword.keywordName}
            </div>
        </>
    )
}


export default SocialKeyword;
