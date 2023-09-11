import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';

function HobbyKeyword({keyword}){
    const [keywordName, setKeywordName] = useState("");

    useEffect(()=>{
        fetch(`http://localhost:8001/keyword/${keyword.keywordCode}`).then(res=> res.json()).then(res=>setKeywordName(res));
    },[])
    return(
        <p className={CardStyle.keywordName}>{keywordName.keywordName}</p>
    )
}


export default HobbyKeyword;