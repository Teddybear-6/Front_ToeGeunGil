import CardStyle from './hobbyCard.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HobbyCategory from './hobbyCategory';
function HobbyCard(){
    const[hobby, setHobby] = useState();
    const[mainImage, setMainImage] = useState();

    return(
        <>
        <div className={CardStyle.hobbyCard}>
            <img src={mainImage}></img>
            <h1>{hobby.hobbyTitle}</h1>
            <HobbyCategory/>
        </div>
        </>
    )
}

export default HobbyCard;