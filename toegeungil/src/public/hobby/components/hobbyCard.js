
import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
import {Link} from 'react-router-dom'
import HobbyKeyword from './HobbyKeyword';
import HobbyCagegoty from './hobbyCategory';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';



function HobbyCard(hobbys){
    const[mainImage, setMainImage] = useState();
  
  

    useEffect(()=>{
        if(hobbys.hobbys){
        fetch(process.env.REACT_APP_URL+`/hobbys/mainimages/${hobbys.hobbys.hobbyCode}`).then(res => res.json())
        .then(res => setMainImage(res))

        
    }
    },[hobbys])
    

    const keywordArr = () =>{
        const newArr =[];
        for(let index =0; index  < hobbys.hobbys?.keyword.length; index++){
            if(index<2){
                newArr.push( <div key={index}className={CardStyle.keywordCard}>
                    <HobbyKeyword keyword={hobbys.hobbys.keyword[index]} />
                </div>)
            }
           
        return newArr;   
    }
 
  }

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
                   
                {keywordArr()}
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