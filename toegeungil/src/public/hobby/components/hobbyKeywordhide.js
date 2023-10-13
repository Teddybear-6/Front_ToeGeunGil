import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';

function HobbyKeywordhide({ keyword }) {
    useEffect(() => {
    }, [keyword])

    return (
        <div className={CardStyle.mainHobbyKeys}>
            {keyword == null ? null : keyword.keywordName}
        </div>
    )
}


export default HobbyKeywordhide;