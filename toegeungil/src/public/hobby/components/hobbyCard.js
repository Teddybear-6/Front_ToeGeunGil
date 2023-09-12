
import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
import {useNavigate} from 'react-router-dom'
import HobbyKeyword from './HobbyKeyword';




function HobbyCard(hobbys){
    const[mainImage, setMainImage] = useState();
    const[category, setCategery] = useState([]);
    // const navigate = useNavigate();
  

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

  const onClickHandler = () =>{
    alert("클릭확인")
    // navigate(`/hobby/${hobbys.hobbys.hobbyCode}`);
   
}

    return(
        <>
        <div className={CardStyle.hobbyCard} onClick={onClickHandler}>
            <img className={CardStyle.hobbyImage} src={mainImage}></img>
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
        </>
    )
}

export default HobbyCard;