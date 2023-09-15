import { useState, useEffect } from "react";

function CommunityKeyword({keywordCode}){
    const [keywordName, setKeywordName] = useState();

    useEffect(() => {
        console.log(keywordCode)
        fetch(`http://localhost:8001/keyword/${keywordCode}`).then((response) => response.json()).then((data) => setKeywordName(data.keywordName || '')).catch((error) => {
            console.log(error);
        })
        console.log(keywordCode)
    }, []);
    
    return(
        <span>{keywordName}</span>
    )
}

export default CommunityKeyword;