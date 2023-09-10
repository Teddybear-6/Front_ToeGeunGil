import CardStyle from './hobbyCard.module.css';
import { useState, useEffect } from 'react';
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
            <img src={mainImage}></img>
            <h1>{hobbys.hobbys.hobbyTitle}</h1>
            <h1>{hobbys.hobbys.hobbyPrice}원</h1>
            {hobbys.hobbys.keyword && hobbys.hobbys.keyword.map((keyword,index)=>(
               
                <HobbyKeyword keyword={keyword.keywordCode} key={index}/>
            ))}
            
        </div>
        </>
    )
}

export default HobbyCard;