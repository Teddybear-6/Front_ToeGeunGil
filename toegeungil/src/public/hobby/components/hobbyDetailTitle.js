
import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
import HobbyKeyword from './HobbyKeyword';
import HobbyStyle from './HobbyDetailTitle.module.css'

function HobbyDetailTitle({detail}){
    const[hobby, setHobby]= useState({});
    const[category, setCategery] =useState([])
    const[keyword ,setKeyword] =useState([]);
    

    useEffect(()=>{
        setHobby(detail);
        setKeyword(detail.keywordDTOList)
        console.log(keyword)
        console.log(hobby.keywordDTOList)


  fetch(`http://localhost:8001/category/${hobby.categoryCode}`).then(res=>res.json()).then(data=>{
            setCategery(data)
           
        })

        console.log(category)

    },[])

    const keywordArr = () =>{
        const newArr =[];
        for(let index =0; index  < keyword.length; index++){
                newArr.push( <div key={index}className={CardStyle.keywordCard}>
                    <HobbyKeyword keyword={hobby.keywordDTOList[index]} />
                </div>)
          
    }
    return newArr;
  }

    return(
        <>
            <div className={HobbyStyle.titleAndkeyword}>
                <h1 className={HobbyStyle.hobbyTitle}>{hobby.hobbyTitle}</h1>
                <div >
                <div className={HobbyStyle.keywordCard}>
                <p className={CardStyle.keywordName}>{category.categoryName}</p>
                </div>
                {keywordArr()}
                </div>
            </div>
        </>
    )
}



export default HobbyDetailTitle;