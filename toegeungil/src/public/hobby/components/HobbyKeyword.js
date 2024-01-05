import { useState, useEffect } from 'react';
import CardStyle from './css/hobbyCard.module.css';

function HobbyKeyword({ keyword }) {

    return (
        <p className={CardStyle.keywordName}>{keyword.keywordName}</p>
    )
}


export default HobbyKeyword;