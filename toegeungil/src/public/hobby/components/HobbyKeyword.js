import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';

function HobbyKeyword({keyword}){
    const [keywordName, setKeywordName] = useState("");

    useEffect(()=>{
        fetch(process.env.REACT_APP_URL+`/keyword/${keyword.keywordCode}`).then(res=> res.json()).then(res=>setKeywordName(res));
    },[keyword])
    return(
        <p className={CardStyle.keywordName}>{keywordName.keywordName}</p>
    )
}


export default HobbyKeyword;