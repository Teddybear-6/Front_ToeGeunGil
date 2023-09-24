
import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
import {Link} from 'react-router-dom'
import HobbyCardkeyword from './hobbyCardKeyword';
import HobbyCagegoty from './hobbyCategory';



function HobbyCard(hobbys){
    const[mainImage, setMainImage] = useState();
  
  

    useEffect(()=>{
        if(hobbys.hobbys){
        fetch(process.env.REACT_APP_URL+`/hobbys/mainimages/${hobbys.hobbys.hobbyCode}`).then(res => res.json())
        .then(res => setMainImage(res))
    }
    

    },[hobbys])
    

    return(
        <>
        {!hobbys.hobbys ? "취미가 없습니다." :  
        <Link to={`/hobby/${hobbys.hobbys?.hobbyCode}`}>
        <div className={CardStyle.hobbyCard}>
            {
        !mainImage ? null :  <img className={CardStyle.hobbyImage} src={`http://106.250.199.126:9000/image/${mainImage.path}`}/>
            }
            <p className={CardStyle.hobbyTitle}>{hobbys.hobbys.hobbyTitle}</p>
          
           <div>
               <HobbyCagegoty category= {hobbys.hobbys?.categoryCode} />
                   
                <HobbyCardkeyword keyword={hobbys.hobbys?.keyword} />
                <div className={CardStyle.keywordUnName}>
               <p className={CardStyle.keywordName}>···</p>
               </div>
               </div>
            <p className={CardStyle.hobbyPrice}> {hobbys.hobbys.hobbyPrice}원</p>
        </div>
        </Link>
}
        </>
    )
}

export default HobbyCard;