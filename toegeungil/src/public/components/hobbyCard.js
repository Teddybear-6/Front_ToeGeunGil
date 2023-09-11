
import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
import { Link } from 'react-router-dom';
import HobbyKeyword from './HobbyKeyword';
function HobbyCard(hobbys){
    const[mainImage, setMainImage] = useState();
    const[category, setCategery] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:8001/hobbys/mainimages/${hobbys.hobbys.hobbyCode}`).then(res => res.blob())
        .then(blob => {
            const objectURL = URL.createObjectURL(blob)
            setMainImage(objectURL)
        }
        )

        fetch(`http://localhost:8001/category/${hobbys.hobbys.categoryCode}`).then(res=>res.json()).then(data=>{
            setCategery(data)
           
        })
    },[])
    
    return(
        <>
        <div className={CardStyle.hobbyCard}>
            <img className={CardStyle.hobbyImage} src={mainImage}></img>
            <p className={CardStyle.hobbyTitle}>{hobbys.hobbys.hobbyTitle}</p>
           
           <div>
                <div className={CardStyle.keywordCard}>
                <p className={CardStyle.keywordName}>{category.categoryName}</p>
                </div>
                {hobbys.hobbys.keyword && hobbys.hobbys.keyword.map((keyword,index)=>(
                    <div className={CardStyle.keywordCard}>
                        <HobbyKeyword keyword={keyword.keywordCode} key={index}/>
                    </div>
                    
             ))}

                <div className={CardStyle.keywordUnName}>
               <p className={CardStyle.keywordName}>···</p>
               </div>
               </div>
            <p className={CardStyle.hobbyPrice}> {hobbys.hobbys.hobbyPrice}원</p>
        </div>
        </>
    )
}

export default HobbyCard;