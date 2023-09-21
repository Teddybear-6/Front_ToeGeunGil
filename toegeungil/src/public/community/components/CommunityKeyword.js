import { useState, useEffect } from "react";

function CommunityKeyword({ keywordCode }) {
    const [keywordName, setKeywordName] = useState();

    useEffect(() => {
        console.log(keywordCode)
        fetch(process.env.REACT_APP_URL+`/keyword`).then((response) => response.json()).then((data) => setKeywordName(data.keywordName || '')).catch((error) => {
        console.log(error);
        })
        console.log(keywordCode)
    }, [keywordCode]);

    return (
        <span>{keywordName}</span>
    )
}

export default CommunityKeyword;