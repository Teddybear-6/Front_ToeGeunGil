import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';


function HobbyCagegoty({ category }) {

    return (
        <div className={CardStyle.keywordCard}>
            <p className={CardStyle.keywordName}>{category}</p>
        </div>
    )
}

export default HobbyCagegoty;