import { useState, useEffect } from "react";

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
            {keyword.keywordName}
        </>
    )
}

export default CommunityKeyword;
