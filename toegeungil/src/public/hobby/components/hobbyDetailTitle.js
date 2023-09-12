
import { useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';
import HobbyKeyword from './HobbyKeyword';
import HobbyStyle from './HobbyDetailTitle.module.css'

function HobbyDetailTitle({detail,category}){
    const[hobby, setHobby]= useState({});
    const[categoryName, setCategoryName] =useState([])
    const[keyword ,setKeyword] =useState([]);
    

    useEffect(()=>{
       
        setHobby(detail);
        setKeyword(detail.keywordDTOList)
        setCategoryName(category);
       
    },[detail])

    const keywordArr = () =>{
        const newArr =[];
        for(let index =0; index  <  keyword?.length; index++){
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
                <p className={CardStyle.keywordName}>{categoryName.categoryName}</p>
                </div>
                {keywordArr()}
                </div>
            </div>
        </>
    )
}



export default HobbyDetailTitle;