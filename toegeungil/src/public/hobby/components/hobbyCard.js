
import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
import {Link} from 'react-router-dom'
import HobbyKeyword from './HobbyKeyword';




function HobbyCard(hobbys){
    const[mainImage, setMainImage] = useState();
    const[category, setCategery] = useState([]);
    
  

    useEffect(()=>{
        fetch(`http://localhost:8001/hobbys/mainimages/${hobbys.hobbys.hobbyCode}`).then(res => res.json())
        .then(res => setMainImage(res))

        fetch(`http://localhost:8001/category/${hobbys.hobbys.categoryCode}`).then(res=>res.json()).then(data=>{
            setCategery(data)
           
        })

      
        console.log(mainImage)


    },[])
    

    const keywordArr = () =>{
        const newArr =[];
        for(let index =0; index  < hobbys.hobbys.keyword.length; index++){
            if(index<2){
                newArr.push( <div key={index}className={CardStyle.keywordCard}>
                    <HobbyKeyword keyword={hobbys.hobbys.keyword[index]} />
                </div>)
            }
          
    }
    return newArr;
  }

    return(
        <>
        <Link to={`/hobby/${hobbys.hobbys.hobbyCode}`}>
        <div className={CardStyle.hobbyCard}>
            {
        !mainImage ? null :  <img className={CardStyle.hobbyImage} src={`http://106.250.199.126:9000/image/${mainImage.path}`}/>
            }
            <p className={CardStyle.hobbyTitle}>{hobbys.hobbys.hobbyTitle}</p>
          
           <div>
                <div className={CardStyle.keywordCard}>
                <p className={CardStyle.keywordName}>{category.categoryName}</p>
                </div>
                   
                {keywordArr()}
                <div className={CardStyle.keywordUnName}>
               <p className={CardStyle.keywordName}>···</p>
               </div>
               </div>
            <p className={CardStyle.hobbyPrice}> {hobbys.hobbys.hobbyPrice}원</p>
        </div>
        </Link>
        </>
    )
}

export default HobbyCard;