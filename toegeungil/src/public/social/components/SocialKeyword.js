import { useEffect, useState } from "react";

function SocialKeyword({code}){
    const [keyword, setkeyword] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8001/keyword/${code}`)
            .then(response => response.json())
            .then(data => setkeyword(data));
    },[]);

    return (
        <>
            <div>
                {/* {code == 0? '존재하지 않은 키워드' : keyword == null? null:keyword.keywordName} */}
                {keyword == null? null:keyword.keywordName}
            </div>
        </>
    )
}


export default SocialKeyword;
