import {useState, useEffect } from 'react';
import CardStyle from './hobbyCard.module.css';


function HobbyCagegoty({category}){
    const[categoryName, setCategery] = useState([]);
    useEffect(()=>{
        fetch(process.env.REACT_APP_URL+`/category/${category}`).then(res=>res.json()).then(data=>{
            setCategery(data)
           
        })
    },[category])
    
    return(
        <div className={CardStyle.keywordCard}>
        <p className={CardStyle.keywordName}>{categoryName.categoryName}</p>
        </div>
    )
}

export default HobbyCagegoty;