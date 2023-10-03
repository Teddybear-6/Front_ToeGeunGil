import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';

function HobbyKeyword({ keyword }) {
    useEffect(() => {
    }, [keyword])

    return (
        <p className={CardStyle.keywordName}>{keyword.keywordName}</p>
    )
}


export default HobbyKeyword;