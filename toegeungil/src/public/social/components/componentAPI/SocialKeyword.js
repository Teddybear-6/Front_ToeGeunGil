import { useEffect, useState } from "react";


import MainStyle from '../css/SocialMainCard.module.css';

function SocialKeyword({code}){
    const [keyword, setkeyword] = useState({});

    useEffect(() => {
        console.log()
        fetch(`http://localhost:8001/keyword/${code.keywordCode}`)
            .then(response => response.json())
            .then(data => setkeyword(data));
    },[]);


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
