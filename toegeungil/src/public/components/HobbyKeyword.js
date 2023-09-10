import { useState, useEffect } from 'react';

function HobbyKeyword({keyword}){
    const [keywordName, setKeywordName] = useState("");

    useEffect(()=>{
        console.log(keyword)
        fetch(`http://localhost:8001/keyword/${keyword}`).then(res=> res.json()).then(res=>setKeywordName(res));
    },[])
    return(
        <>
        <h1>{keywordName.keywordName}</h1>
        </>
    )
}


export default HobbyKeyword;