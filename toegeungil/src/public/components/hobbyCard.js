
import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
import { Link } from 'react-router-dom';
import HobbyKeyword from './HobbyKeyword';
function HobbyCard(hobbys){
    const[mainImage, setMainImage] = useState();

    useEffect(()=>{
        fetch(`http://localhost:8001/hobbys/mainimages/${hobbys.hobbys.hobbyCode}`).then(res => res.blob())
        .then(blob => {
            const objectURL = URL.createObjectURL(blob)
            setMainImage(objectURL)
        }
        )
    },[])
    
    return(
        <>
        <div className={CardStyle.hobbyCard}>
            <img className={CardStyle.hobbyImage} src={mainImage}></img>
            <p className={CardStyle.hobbyTitle}>{hobbys.hobbys.hobbyTitle}</p>
            <div>
            {hobbys.hobbys.keyword && hobbys.hobbys.keyword.map((keyword,index)=>(
               <div className={CardStyle.keywordCard}>
                <HobbyKeyword keyword={keyword.keywordCode} key={index}/>
                </div> 
            ))}
            </div>
            <p className={CardStyle.hobbyPrice}> {hobbys.hobbys.hobbyPrice}원</p>
        </div>
        </>
    )
}

export default HobbyCard;